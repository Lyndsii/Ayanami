module.exports.run = async (client, message, args) => {
  const nek = require("nekos.life");
  const neko = new nek();
  const { MessageEmbed } = require("discord.js");
  let thing = await neko.sfw.kiss()
  let thong = JSON.stringify(thing)
  let thang = thong.slice(8)
  let theng = thang.slice(0, -2)
  
  if (!message.mentions.users.first()) {
    return message.channel.send('Mention somebody you want to kiss!~💖')
  }

  async function test() {
    message.channel.send(new MessageEmbed().setImage(theng).setColor(0xffd1dc).setTitle(message.author.username + ' has kissed ' + message.mentions.users.first().username + '!~💖').setFooter(`Powered by: Nekos.Life API`));
  }

  test();
};

module.exports.info = {
  name: "kiss",
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: "Anime",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Kisses a specified user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}