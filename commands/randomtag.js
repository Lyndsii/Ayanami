module.exports.run = async (client, message, args) => {
  let db = client.db;
  let { MessageEmbed } = require('discord.js');
  let tags = db.fetch(`tags`)
  let tagNames = Object.keys(tags)
  let randomTags = tagNames[Math.floor(Math.random() * tagNames.length/* + 1*/)]
  let chosenName = randomTags;
  // let tagList = db.fetch(`tagList`)
  let tagthing = db.fetch(`tags.${chosenName}.description`)
  
  if (tagthing.length > 2048) {
    tagthing = await client.hastebin(tagthing, { url: "https://hastebin.com", extension: "txt" });
  }

  message.channel.send(new MessageEmbed()
                      .setTitle(chosenName)
                      .setDescription(tagthing)
                      .setColor(0xffd1dc)
                      )
  db.add(`tags.${chosenName}.usage`, 1)
  
}

module.exports.info = {
  name: "randomtag",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Tag",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a random tag.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}