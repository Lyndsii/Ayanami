module.exports.run = async (client, message, args) => {
  let db = client.db;
  let tags = db.fetch(`tags`)
  let tagNames = Object.keys(tags)
  let chosenName = args[0];
  // let tagList = db.fetch(`tagList`)
  let tagAuthor = db.fetch(`tags.${args[0]}.author`)
  
  if (!args[0]) {
    message.channel.send('What tag would you like to edit, shikikan?~💖')
  } else if (!tagNames.includes(chosenName)) {
    message.channel.send('I cannot find that tag, shikikan!~💖')
  } else if (tagAuthor !== message.author.id) {
    message.channel.send('You cannot edit someone else\'s tag, shikikan!~💖')
  } else {
    db.set(`tags.${chosenName}.description`, args.slice(1).join(' '))
    message.channel.send('I have edited ' + args[0] + '!~💖')
  }
}

module.exports.info = {
  name: "edittag",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Tag",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Edits a tag.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Tag Name) (Tag Description)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}