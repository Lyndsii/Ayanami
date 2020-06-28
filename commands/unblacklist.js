
module.exports.run = async (client, message, args) => {
  const db = client.db
  if (message.author.id !== process.env.OWNERID) {
    message.channel.send('You lack the permissions to do this, shikikan!~💖')
  } else if (!args[0]){
    message.channel.send('Who should I unblacklist?~💖')
  } else {
    db.delete(`blacklist_${client.user.id}.${args[0]}`)
    await message.channel.send(`Successfully unblacklisted: ${args[0]}!~💖`)
  }
  
  
}

module.exports.info = {
  name: "unblacklist",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Unblacklists a specified user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User ID)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}