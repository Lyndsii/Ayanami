const cathyjs = require("cathyjs");

module.exports.run = async (client, message, args) => {
  
  if (!args[0]) {
    message.channel.send('Hm?~💖')
  } else {
    let sliceOff = process.env.PREFIX.length + this.info.name.length
    let text = message.content.slice(sliceOff)
    message.channel.startTyping();

    var reply = await cathyjs.startChatting(`${text}`);


    message.channel.send(`${reply}~💖`);
    message.channel.stopTyping();
  }
  
  
}

module.exports.info = {
  name: "chat",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Enables the cleverbot feature.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Message)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}