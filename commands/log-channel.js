let { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  let db = client.db
  if (!message.member.hasPermission('ADMINISTRATOR') || message.author.id !== process.env.OWNERID || message.author.id !== process.env.ALTID) {
    message.channel.send('You lack the permissions required to select a logs channel!~💖')
  } else if (!message.mentions.channels.first()) {
    message.channel.send('Which channel should I send logs to?~💖')
  };
  
 // let fetchedChannel = message.guild.channels.find(ch => ch.id == message.mentions.channels)
  let fetchedChannel = message.mentions.channels.first()
  if (!fetchedChannel) {
    message.channel.send('That channel is not in this server!~💖')
  };
  
  db.set(`logsChannel_${message.guild.id}`, fetchedChannel.id)
  await message.channel.send(`\`${fetchedChannel.name}\` has been chosen as the logs channel for this server!~💖`)
}

module.exports.info = {
  name: "log-channel",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Config",
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Selects a specified channel as the logs channel.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(ID Of Logs Channel)',
  administratorOnly: true,
  moderatorOnly: false,
  hidden: false
}