module.exports.run = async (client, message, args) => {
  const nek = require("nekos.life");
  const neko = new nek();
  const { MessageEmbed } = require("discord.js");
  let thing = await neko.nsfw.nekoGif()
  let thong = JSON.stringify(thing)
  let thang = thong.slice(8)
  let theng = thang.slice(0, -2)
  
  //if (!message.mentions.users.first()) {
    //return message.channel.send('Mention somebody you want to hug!~')
  //}

  async function test() {
    //console.log(theng)
    message.channel.send(new MessageEmbed().setImage(theng).setColor(0xffd1dc).setTitle(message.author.username + ' has requested a lewd neko gif!~💖').setFooter(`Powered by: Nekos.Life API`));
  }

  test();
};

module.exports.info = {
  name: "lewdneko",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "NSFW",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: true,
  description: 'Generates a lewd gif of a neko.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}