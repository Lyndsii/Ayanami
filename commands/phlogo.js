const Discord = require("discord.js");
// const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please provide some text (e.g, text: pizza text: hub)!~💖')
  } else if (!args.includes('text:')) {
    message.channel.send('Please provide top and bottom text (e.g, text: pizza text: hub)!~💖')
  } else {
    // fetch("https://api.alexflipnote.dev/scroll?text=" + args.join('%20'))

    // .then(res => res.json()).then(body => {

      // if (!body) return message.reply("This command is experiencing a few issues!~💖")
      let text = args.join('%20');
      let textar = text.split('text:');
      let top = textar[1]
      let bottom = textar[2]
      let embed = new Discord.MessageEmbed()
      .setColor(0xffd1dc)
      .setImage("https://api.alexflipnote.dev/pornhub?text=" + top + "&text2=" + bottom)
      .setFooter(`Powered by: AlexFlipnote API`)
      // .setTitle('Did you mean...~💖 ')
      // .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      // .addField(`Shade`, body.shade.join(`,\n`), true)
      // .addField(`Tint`, body.tint.join(`,\n`), true)

      message.channel.send(embed)

    // })
  }
  
} 
 
module.exports.info = {
  name: "phlogo",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends an altered pornhub logo',
  disabledGlobal: false,
  disabledGuild: false,
  usage: 'text: (Text) text: (Text)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}