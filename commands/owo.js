module.exports.run = async (client, message, args) => {
  const nek = require("nekos.life");
  const neko = new nek();
  const { MessageEmbed } = require("discord.js");
  //let thing = await neko.sfw.OwOify()
  //let thong = JSON.stringify(thing)
  //let thang = thong.slice(8)
  //let theng = thang.slice(0, 38)
  
  if (!args[0]) {
    message.channel.send('What should I OwOify?~💖')
  } else {
    async function work() {
    let owo = await neko.sfw.OwOify({text: args.join(' ')});
    let uwu = JSON.stringify(owo);
    let uwo = uwu.slice(8, -2)
    //console.log(uwu);
    if (uwo.length > 2048) {
    uwo = await client.hastebin(uwo, { url: "https://hastebin.com", extension: "txt" });
    }
    message.channel.send(uwo)
}

work();
  }

};

module.exports.info = {
  name: "owo",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Text",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'OWOifies your text.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Text)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}