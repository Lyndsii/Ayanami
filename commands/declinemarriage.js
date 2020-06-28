module.exports.run = async (client, message, args) => {
  let bride = message.mentions.users.first();
  let db = client.db;
  let { MessageEmbed } = require('discord.js');
  
  if (!bride) {
    message.channel.send('Tag someone who has proposed to you!~💖')
  } else if (!db.has(`proposals.${message.author.id}.${bride.id}`)) {
    message.channel.send('That person hasn\'t proposed to you, shikikan!~💖')
  } else {
    message.channel.send(new MessageEmbed()
                         .setColor(0xffd1dc)
                         .setTitle('💔 Rejection')
                         .setDescription('Aw, ' + message.author.username + ' rejected ' + bride.username + '\'s marriage proposal! There\'s always next time!~💖')
                        )
    db.delete(`proposals.${message.author.id}.${bride.id}`)
    // db.set(`marriage_${message.author.id}`, { lover: bride.id })
    // db.set(`marriage_${bride.id}`, { lover: message.author.id })
  }
  // db.set(`proposals.${bride.id}.${message.author.id}`, true)
  //db.set(`marriage_${message.author.id}`, { lover: bride.id })
  //db.set(`marriage_${bride.id}`, { lover: message.author.id })
  //message.channel.send('You have married ' + bride.username + '!~💖')
}

module.exports.info = {
  name: 'declinemarriage',
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: 'Marriage',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Decline a proposal.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}