const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async (client, message, args) => {
const db = client.db

  let commandusage = db.fetch(`commandUsage_${client.id}`)
  if (commandusage === null) commandusage = 0;
  let version = db.fetch(`version_${client.user.id}`)
  
  message.channel.send(
    new Discord.MessageEmbed() 
    .setColor(0xffd1dc)
    .setTitle(client.user.username + '\'s Stats!~💖')
    .setThumbnail(client.user.displayAvatarURL)
    .addField('Serving...',/*'- ' + client.guilds.reduce((prev, acc) => acc.memberCount + prev, 0) + ' total members\n'+*/'- ' + client.guilds.cache.size + ' total servers', true)
    .addField('Libraries','-Discord.JS v' + Discord.version + ' <:node_icon:641916314507542528>', true)
    // .addField('Online Time',`\`${(ms(client.uptime)).days} days | ${(ms(client.uptime)).hours} hours | ${(ms(client.uptime)).minutes} minutes | ${(ms(client.uptime)).seconds} seconds\``, true)
    .addField('Command Usage', commandusage, true)
    .addField('Version', `v${version}`, true)
    // .addField('Change Log','```diff\n+ Changed from Primary Bot to Ayanami\n\n+ Added Tag system\n\n+ Added Marriage system```', true)
    .setImage('https://top.gg/api/widget/624559376660693003.png?usernamecolor=FFFFFF&topcolor=ffd1dc&middlecolor=FFFFFF&highlightcolor=78ddff&labelcolor=FFFFFF&datacolor=FFFFFF')
  )
};

module.exports.info = {
  name: "botinfo",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the statistics for the bot.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}