module.exports.run = async (client, message, args) => {
  let db = client.db;
  let { MessageEmbed } = require('discord.js');
  let m = await message.channel.send('Flipping through the pages...')
  let news = db.fetch(`newsletter`)
  m.edit(new MessageEmbed()
                       .setAuthor('Bot Newsletter', client.users.cache.get(process.env.OWNERID).displayAvatarURL)
                       .setTitle(news.date.join('-'))
                       .setDescription(news.content)
                       .setFooter(`Page ` + news.page)
                       .setColor(0xffd1dc)
                      )
}

module.exports.info = {
  name: 'newsletter',
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: 'Utility',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Looks through the bot newsletter.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}