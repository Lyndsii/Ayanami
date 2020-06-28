const Discord = require("discord.js");
const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    fetch("https://api.alexflipnote.dev/colour/random")

    .then(res => res.json()).then(body => {

      if (!body) return message.reply("This command is experiencing a few issues!~💖")

      let embed = new Discord.MessageEmbed()
      .setColor(body.hex)
      .setThumbnail(body.image)
      .setTitle(body.name)
      .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      .addField(`Shade`, body.shade.join(`,\n`), true)
      .addField(`Tint`, body.tint.join(`,\n`), true)
      .setFooter(`Powered by: AlexFlipnote API`)

      message.channel.send(embed)

    })
  } else {
    fetch("https://api.alexflipnote.dev/colour/" + args[0])

    .then(res => res.json()).then(body => {

      if (!body) return message.reply("This command is experiencing a few issues!~💖")

      let embed = new Discord.MessageEmbed()
      .setColor(body.hex)
      .setThumbnail(body.image)
      .setTitle(body.name)
      .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      .addField(`Shade`, body.shade.join(`,\n`), true)
      .addField(`Tint`, body.tint.join(`,\n`), true)
      .setFooter(`Powered by: AlexFlipnote API`)

      message.channel.send(embed)

    })
  }
  
} 

module.exports.info = {
  name: "colour",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends an image of a chosen/randomised colour',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<Hex Code>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}