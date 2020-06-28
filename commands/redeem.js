module.exports.run = async (client, message, args) => {
  let db = client.db;
  let u = Object.keys(db.fetch(`premium.users`))
  if (!args[0]) {
    message.channel.send('What code would you like to redeem?~💖')
  } else if (db.fetch(`codes`) !== args[0].toUpperCase()) {
    message.channel.send('Invalid code!~💖')
  } else if (u.includes(message.author.id)) {
    message.channel.send('You\'re already a premium user!~💖')
  } else {
    message.channel.send('Code redeemed successfully!~💖')
    db.set(`premium.users.${message.author.id}`, true)
    db.delete(`codes`)
    client.users.get(process.env.OWNERID).send('New Redeem Code Needed.')
  }
}

module.exports.info = {
  name: 'redeem',
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: 'Premium',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Redeems a code.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Redeem Code)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}