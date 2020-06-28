const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  
  let obj = {
    true: "<:toggleOn:449280056322162708> ",
    false: "<:toggleOff:449287667633618956> ",
    undefined: "<:toggleOn:449280056322162708>"
  }

  const db = client.db
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send('You lack the permissions needed to do this!~💖')
  } else if (!args[0]) {
    message.channel.send(new Discord.MessageEmbed()
                         .setTitle('Modules')
                         .setDescription(`MARRIAGE: ${obj[db.fetch(`modules.${message.guild.id}.marriage`)]}\nTAG: ${obj[db.fetch(`modules.${message.guild.id}.tag`)]}\nLEVELLING: ${obj[db.fetch(`modules.${message.guild.id}.levelling`)]}\nECONOMY: ${obj[db.fetch(`modules.${message.guild.id}.economy`)]}\nNSFW: ${obj[db.fetch(`modules.${message.guild.id}.nsfw`)]}\nLOGGING: ${obj[db.fetch(`modules.${message.guild.id}.logging`)]}`)
                        )
  }
  

}

module.exports.info = {
  name: "disable",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Config",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Disables a specified feature',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Feature)',
  administratorOnly: true,
  moderatorOnly: false,
  hidden: true
}