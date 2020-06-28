module.exports.run = async (client, message, args) => {
  let db = client.db;
  let { MessageEmbed } = require('discord.js');
  let proposals = Object.keys(db.fetch(`proposals.${message.author.id}`));
  let e = new MessageEmbed().setTitle('Proposals').setColor(0xffd1dc)
  proposals.forEach(p => {
    let suitors = client.users.cache.get(p).username;
    let allSuitors = suitors//.map(s => s.username);
    if (allSuitors <= 0) return;
    let a = allSuitors || 'Shikikan, you have no proposals!~💖'
    e.setDescription(a)
  });
  message.channel.send(e);
  // `proposals.${message.author.id}`
}

module.exports.info = {
  name: 'showproposals',
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: 'Marriage',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Show the people who have proposed to you.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}