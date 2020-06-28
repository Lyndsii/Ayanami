module.exports.run = async (client, message, args) => {
  let db = client.db;
  let tags = db.fetch(`tags`)
  let tagNames = Object.keys(tags)
  let chosenName = args[0];
  // let tagList = db.fetch(`tagList`)
  let tagthing = db.fetch(`tags.${args[0]}.description`)
  if (!args[0]) {
    message.channel.send('What tag would you like?~💖')
  } else if (!tagNames.includes(chosenName)) {
    message.channel.send('Shikikan, I can\'t seem to find that tag!~💖')
  } else {
    if (tagthing.length > 2000) {
      tagthing = await client.hastebin(tagthing, { url: "https://hastebin.com", extension: "txt" });
    }
    message.channel.send(tagthing)
    db.add(`tags.${chosenName}.usage`, 1)
  }
}

module.exports.info = {
  name: "tag",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Tag",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a tag.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Tag Name)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}