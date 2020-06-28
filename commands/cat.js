module.exports.run = async (client, message, args) => {
  const nek = require("nekos.life");
  const neko = new nek();
  const { MessageEmbed } = require("discord.js");
  let thing = await neko.sfw.meow()
  let thong = JSON.stringify(thing)
  let thang = thong.slice(8)
  let theng = thang.slice(0, -2)

  async function test() {
    //console.log(theng)
    message.channel.send(new MessageEmbed().setImage(theng).setColor(0xffd1dc).setTitle(message.author.username + ' has requested a cat image!~💖').setFooter(`Powered by: Nekos.Life API`));
  }

  test();
};

module.exports.info = {
  name: "cat",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Animals",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Generates an image of a cat.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}