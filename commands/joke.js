const fetch = require("node-fetch")
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {

  fetch("https://sv443.net/jokeapi/category/any")

  .then(res => res.json()).then(body => {

    if (!body) return message.reply("There was an error whilst loading this command, shikikan!~💖")

    let embed = new MessageEmbed()
    .setDescription(`${body.joke}`)
    .setColor(0xffd1dc)
    .setFooter(`Powered by: SV443`)
    if (!body.joke) {
      embed.setDescription(`${body.setup}\n${body.delivery}`)
    }
    message.channel.send(embed)
  })
}

module.exports.info = {
  name: "joke",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a joke.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}