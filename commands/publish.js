module.exports.run = async (client, message, args) => {
  let db = client.db;
  let today = new Date();
  let date = [today.getDate(), (today.getMonth()+1), today.getFullYear()]
  db.set(`newsletter`, { date: date, content: args.join(' ') })
  db.add(`newsletter.page`, 1)
  message.channel.send('Published the article!~💖')
}

module.exports.info = {
  name: 'publish',
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: 'Owner',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Publishes an article to the bot newsletter.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Content)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}