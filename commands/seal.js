const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {

    fetch("https://apis.duncte123.me/seal")

    .then(res => res.json()).then(body => {

      if (!body) return message.reply("This command is still loading, shikikan!~💖")

      let embed = new Discord.MessageEmbed()
      .setColor(0xffd1dc)
      .setImage(body.data.file)
      .setTitle(`${message.author.username} has requested a seal image!~💖`)
      .setFooter(`Powered by: Duncte123 API`)

      message.channel.send(embed)

    })
}

module.exports.info = {
  name: "seal",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Animals",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Generates an image of a seal.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}