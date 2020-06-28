module.exports.run = async (client, message, args) => {
  const nek = require("nekos.life");
  const neko = new nek();
  const { MessageEmbed } = require("discord.js");
  let thing = await neko.sfw.feed()
  let thong = JSON.stringify(thing)
  let thang = thong.slice(8)
  let theng = thang.slice(0, -2)
  
  if (!message.mentions.users.first()) {
    return message.channel.send('Mention somebody you want to feed!~💖')
  }

  async function test() {
    message.channel.send(new MessageEmbed().setImage(theng).setColor(0xffd1dc).setTitle(message.author.username + ' has fed ' + message.mentions.users.first().username + '!~💖').setFooter(`Powered by: Nekos.Life API`));
  }

  test();
};

module.exports.info = {
  name: "feed",
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: "Anime",
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Feeds a mentioned user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}