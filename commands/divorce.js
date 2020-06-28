module.exports.run = async (client, message, args) => {
  let bride = message.mentions.users.first();
  let db = client.db;
  let { MessageEmbed } = require('discord.js');
  
  if (!db.has(`marriage_${message.author.id}`)) {
    message.channel.send('You weren\'t married to anyone in the first place, shikikan!~💖')
  } else if (!bride) {
    message.channel.send('Tag someone that you want to divorce!~💖')
  } else if (db.fetch(`marriage_${message.author.id}.lover`) !== bride.id) {
    message.channel.send('You\'re not married to that person!~💖')
  } else {
    message.channel.send(new MessageEmbed()
                         .setColor(0xffd1dc)
                         .setTitle('💔 Divorced')
                         .setDescription(message.author.username + ' and ' + bride.username + ' have divorced...~💖')
                        )
    db.delete(`marriage_${message.author.id}`)
    db.delete(`marriage_${bride.id}`)
  }
  // db.set(`proposals.${bride.id}.${message.author.id}`, true)
  // db.set(`marriage_${message.author.id}`, { lover: bride.user.id })
  // db.set(`marriage_${bride.user.id}`, { lover: message.author.id })
}

module.exports.info = {
  name: 'divorce',
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: 'Marriage',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Divorce a spouse.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}