module.exports.run = async (client, message, args) => {
  let a = require('aesthetics');
  message.channel.send(a(args.join(' ')))
}

module.exports.info = {
  name: 'aesthetic',
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: 'Text',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Makes text aesthetically pleasing.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Text)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}