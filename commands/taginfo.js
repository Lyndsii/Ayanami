module.exports.run = async (client, message, args) => {
  let db = client.db;
  let tags = db.fetch(`tags`)
  let tagNames = Object.keys(tags)
  let chosenName = args[0];
  // let tagList = db.fetch(`tagList`)
  let tagthing = db.fetch(`tags.${args[0]}.description`)
  let tagthingy = db.fetch(`tags.${args[0]}.author`)
  let tagthingyy = db.fetch(`tags.${args[0]}.usage`)
  if (!args[0]) {
    message.channel.send('What tag should I gather data about?~💖')
  } else if (!tagNames.includes(chosenName)) {
    message.channel.send('Shikikan, I can\'t seem to find that tag!~💖')
  } else {
    message.channel.send(`Name: \`${chosenName}\`\nDescription: \`${tagthing}\`\nAuthor: \`${tagthingy}\`\nUsage: \`${tagthingyy}\``)
  }
}

module.exports.info = {
  name: "taginfo",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Tag",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Gathers information about a tag.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Tag Name)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}