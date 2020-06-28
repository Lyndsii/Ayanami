module.exports.run = async (client, message, args) => {
  let db = client.db
  if (!args[0]) {
    message.channel.send('What would you like to set your bio to, shikikan?~💖')
  } else if (args.join(' ').length > 1024) {
    message.channel.send('Your bio cannot exceed `1024` characters!~💖')
  } else {
    db.set(`${message.author.id}.custombio`, args.join(' '))
    message.channel.send('Your custom bio has been set!~💖')
  }
}

module.exports.info = {
  name: "setbio",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sets your custom bio.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Custom Bio)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}