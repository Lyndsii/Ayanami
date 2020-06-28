const Discord = require("discord.js");
// const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please provide some arguments!~💖')
  } else {
    // fetch("https://api.alexflipnote.dev/scroll?text=" + args.join('%20'))

    // .then(res => res.json()).then(body => {

      // if (!body) return message.reply("This command is experiencing a few issues!~💖")

      let embed = new Discord.MessageEmbed()
      .setColor(0xffd1dc)
      .setImage("https://api.alexflipnote.dev/achievement?text=" + args.join('%20'))
      .setTitle('Achievement Get!~💖 ' + message.author.username)
      .setFooter(`Powered by: AlexFlipnote API`)
      // .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      // .addField(`Shade`, body.shade.join(`,\n`), true)
      // .addField(`Tint`, body.tint.join(`,\n`), true)

      message.channel.send(embed)

    // })
  }
  
} 

module.exports.info = {
  name: "achievementget",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends an achieved achievement.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Text)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}