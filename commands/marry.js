const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
  const db = client.db
  let bride = message.mentions.users.first();
  if (!args[0]) {
    message.channel.send(`Please tag the person you'd like to marry!~💖`)
  } else if (!bride) {
    message.channel.send(`Please tag someone who is in this server!~💖`)
  } else if (db.has(`marriage_${message.author.id}.lover`)) {
    message.channel.send('You\'re already married to someone! You should be a more faithful spouse, shikikan!~💖')
  } else if (db.has(`marriage_${bride.id}.lover`)) {
    message.channel.send('They\'re already married! You shouldn\'t be a home-wrecker, shikikan!~💖')
  } else {

      message.channel.send(new MessageEmbed()
                          .setTitle('💍 ' + message.author.username + ' has made a marriage proposal to ' + bride.username)
                          .setThumbnail('https://i.imgur.com/TKZSKIp.png')
                          .setColor(0xffd1dc)
                          .addBlankField()
                          .setDescription(message.author.username + " and " + bride.username + ", have you come here to enter into Marriage without coercion, freely and wholeheartedly? Are you prepared, as you follow the path of Marriage, to love and honor each other for as long as you both shall live?")
                          .addBlankField()
                          .addField('\✔️ "I do."', process.env.PREFIX + 'acceptmarriage @user', true)
                          .addField('\❌ "I don\'t."', process.env.PREFIX + 'declinemarriage @user', true)
                          )
      db.set(`proposals.${bride.id}.${message.author.id}`, true)
      //db.set(`marriage_${message.author.id}`, { lover: bride.user.id })
      //db.set(`marriage_${bride.user.id}`, { lover: message.author.id })
      //message.channel.send('You have married ' + bride.user.username + '!~💖')
    //}
    /*
    message.channel.send(new MessageEmbed()
                          .setTitle('💍 ' + message.author.username + ' has made a marriage proposal to ' + bride.username)
                          .setThumbnail('https://i.imgur.com/TKZSKIp.png')
                          .addBlankField()
                          .setDescription(message.author.username + " and " + bride.username + ", have you come here to enter into Marriage without coercion, freely and wholeheartedly? Are you prepared, as you follow the path of Marriage, to love and honor each other for as long as you both shall live?")
                          .addBlankField()
                          .addField('\✔️ "I do."', process.env.PREFIX + 'acceptmarriage @user', true)
                          .addField('\❌ "I don\'t."', process.env.PREFIX + 'declinemarriage @user', true)
                          )
    */
  }
}

module.exports.info = {
  name: "marry",
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: "Marriage",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Marry somebody.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}