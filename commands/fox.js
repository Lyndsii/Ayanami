const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    const number = 122;
    const imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

    const image = "http:\/\/randomfox.ca\/images\/" + imageNumber + ".jpg";"link";"http:\/\/randomfox.ca\/?i=" + imageNumber

    const embed = new Discord.MessageEmbed()
    .setImage(image)
    .setColor(0xffd1dc)
    .setTitle(`${message.author.username} has requested a fox image!~💖`)
    .setFooter(`Powered by: RandomFox API`)

    message.channel.send(embed);
}

module.exports.info = {
  name: "fox",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Animals",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Generates an image of a fox.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}