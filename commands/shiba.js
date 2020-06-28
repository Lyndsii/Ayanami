const Discord = require("discord.js");
const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  // let u = message.mentions.users.first() || message.author;
  // if (!args[0]) {
  //   message.channel.send('Please provide some arguments!~')
  // }
    fetch("http://shibe.online/api/shibes")

    .then(res => res.json()).then(body => {

      if (!body) return message.reply("This command is experiencing a few issues!~💖")

      let embed = new Discord.MessageEmbed()
      .setColor(0xffd1dc)
      .setImage(body[0])
      .setTitle(message.author.username + ' has requested an image of a shiba!~💖')
      .setFooter(`Powered by: Shibe.online API`)
      // .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      // .addField(`Shade`, body.shade.join(`,\n`), true)
      // .addField(`Tint`, body.tint.join(`,\n`), true)

      message.channel.send(embed)

    })
  // }
  
} 

module.exports.info = {
  name: "shiba",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Animals",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends an image of a shiba.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}