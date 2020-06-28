const shorten = require('isgd');

module.exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Please provide a URL with a title following it!~💖`)
  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send(`Please provide a valid URL!~💖`);
      message.channel.send(`**${res}**`)
    })
  } else {
    shorten.custom(args[0], args[1], function(res) {
      if(res.startsWith('Error:')) return message.channel.send(`**${res}!~💖**`);
      
      message.channel.send(`**<${res}>**`)
    })
  }
}

module.exports.info = {
  name: "shorten",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Shortens a link.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Link & Title)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}