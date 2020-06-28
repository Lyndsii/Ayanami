module.exports.run = async (client, message, args) => {
  let { MessageEmbed } = require('discord.js');
  if (message.author.id !== process.env.OWNERID) {
    message.channel.send('Pong!~💖')
  } else {
    message.channel.send(new MessageEmbed()
                         .setTitle('Here\'s my latency!')
                         .setDescription(`➼ **API Ping:** ${Math.round(client.ws.ping)}ms\n➼ **Message Ping:** ${new Date().getTime() - message.createdTimestamp}ms`)
                         .setColor(0xffd1dc)
                        )
  }
  
  
}

module.exports.info = {
  name: "ping",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends the bot ping.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}