module.exports.run = async (client, message, args) => {
  const db = client.db
  message.channel.send('Sorry, shikikan, but this command is not finished!~💖')
}

module.exports.info = {
  name: "inventory",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the author\'s inventory.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}