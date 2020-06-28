const Discord = require("discord.js");
// const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please provide top and bottom text (e.g, top:toptext bottom:bottomtext)!~💖')
  } else if (!args.includes('top:') || !args.includes('bottom:')) {
    message.channel.send('Please provide top and bottom text (e.g, top: toptext bottom: bottomtext)!~💖')
  } else {
    // fetch("https://api.alexflipnote.dev/scroll?text=" + args.join('%20'))

    // .then(res => res.json()).then(body => {

      // if (!body) return message.reply("This command is experiencing a few issues!~💖")
      let text = args.join('%20');
      let top = text.split('top:')
      let bottom = text.split('bottom:');
      let embed = new Discord.MessageEmbed()
      .setColor(0xffd1dc)
      .setImage("https://api.alexflipnote.dev/drake?top=" + top[1].split('bottom:')[0] + "&bottom=" + bottom[1])
      .setFooter(`Powered by: AlexFlipnote API`)
      // .setTitle(message.author.username + 'an...~💖 ')
      // .setDescription(`Hex: ${body.hex}\nInt: ${body.int}\nRGB Values: (${Object.values(body.rgb_values).join(', ')})\nBrightness: ${body.brightness}`)
      // .addField(`Shade`, body.shade.join(`,\n`), true)
      // .addField(`Tint`, body.tint.join(`,\n`), true)

      message.channel.send(embed)

    // })
  }
  
} 
 
module.exports.info = {
  name: "drakememe",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a drake meme.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: 'top: (Top Text) bottom: (Bottom Text)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}