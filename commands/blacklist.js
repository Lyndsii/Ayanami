

module.exports.run = async (client, message, args) => {
  
  const db = client.db
  
  if (message.author.id !== process.env.OWNERID) {
    message.channel.send('You lack the permissions to do this!~💖')
  } else if (!args[0]){
    message.channel.send('Who should I blacklist?~💖')
  } else if (args[0] == process.env.OWNERID) {
    message.channel.send('You cannot blacklist *yourself*!~💖')
  } else {
    db.push(`blacklist_${client.user.id}`, args[0])
    await message.channel.send(`Successfully blacklisted: ${args[0]}!~💖`)
    
  }
  
}

module.exports.info = {
  name: "blacklist",
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Makes a specified user blacklisted.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}