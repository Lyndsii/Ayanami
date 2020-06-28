module.exports.run = async (client, message, args) => {
  const nek = require("nekos.life");
  const neko = new nek();
  const { MessageEmbed } = require("discord.js");
  //let thing = await neko.sfw.OwOify()
  //let thong = JSON.stringify(thing)
  //let thang = thong.slice(8)
  //let theng = thang.slice(0, 38)



  async function work() {
    let owo = await neko.sfw.fact();
    let uwu = JSON.stringify(owo);
    let uwo = uwu.slice(9, -2)
    //console.log(uwu);
    message.channel.send(uwo)
}

work();
};

module.exports.info = {
  name: "randomfact",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a random fact.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}