module.exports.run = async(client, message, args) => {
  let db = client.db;
  let tags = db.fetch(`tags`)
  let tagNames = Object.keys(tags)
  let chosenName = args[0];
  // let tagList = db.fetch(`tagList`)
  let tagAuthor = db.fetch(`tags.${args[0]}.author`)
  
  if (!args[0]) {
    message.channel.send('What tag should I remove, shikikan?~💖')
  } else if (!tagNames.includes(chosenName)) {
    message.channel.send('Shikikan, I cannot seem to find that tag!~💖')
  } else if (tagAuthor !== message.author.id) {
    message.channel.send('You cannot delete someone else\'s tag, shikikan!~💖')
  } else {
    db.delete(`tags.${chosenName}`)
    message.channel.send('I have deleted the `' + chosenName + '` tag!~💖')
  }
}

module.exports.info = {
  name: "removetag",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Tag",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Removes a tag.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Tag Name)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}