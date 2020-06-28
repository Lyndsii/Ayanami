module.exports.run = async (client, message, args) => {
  const { Discord, MessageEmbed } = require('discord.js')
  let person = message.mentions.users.first() || message.author;
  
  message.channel.send(new MessageEmbed()
                      .setImage(person.displayAvatarURL)
                      .setFooter(person.username)
                      .setColor(0xffd1dc)
                      )
}

module.exports.info = {
  name: "avatar",
  argsNeeded: false,
  userNeeded: false,
  userOptional: true,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends the avatar of either the person who requested it or a mentioned user',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<User>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}