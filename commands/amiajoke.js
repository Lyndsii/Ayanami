const Discord = require("discord.js");
// const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  let u = message.mentions.users.first() || message.author;
  // if (!args[0]) {
  //   message.channel.send('Please provide some arguments!~')
  // }
    // fetch("https://api.alexflipnote.dev/scroll?text=" + args.join('%20'))

    // .then(res => res.json()).then(body => {

      // if (!body) return message.reply("This command is experiencing a few issues!~💖")

      let embed = new Discord.MessageEmbed()
      .setColor(0xffd1dc)
      .setImage("https://api.alexflipnote.dev/amiajoke?image=" + u.displayAvatarURL)
      .setTitle('Is ' + u.username + ' a joke to you?~💖')
      .setFooter(`Powered by: AlexFlipnote API`)
      // .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      // .addField(`Shade`, body.shade.join(`,\n`), true)
      // .addField(`Tint`, body.tint.join(`,\n`), true)

      message.channel.send(embed)

    // })
  // }
  
} 

module.exports.info = {
  name: "amiajoke",
  argsNeeded: false,
  userNeeded: false,
  userOptional: true,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a "Am I a joke to you?" meme.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<User>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}