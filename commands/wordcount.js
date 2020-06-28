module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('What words should I count, shikikan?~💖');
  else
    message.channel.send(`There are ${args.length} words in that text!~💖`)
}

module.exports.info = {
  name: "wordcount",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Counts the words in a text.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Text)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}