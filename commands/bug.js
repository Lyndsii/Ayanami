const Discord = require('discord.js');
const moment = require('moment');


module.exports.run = async(client, message, args) => {
    message.delete();
    if (!args[0]) {
        return message.channel.send(`Please give me something to report first, ${message.author.username}!~💖`);
    }

    let guild = message.guild;
    const cnl = client.channels.get('652743237135499275');
    message.channel.send(`Thanks for the bug report!~💖 Here is the full ticket:`);
    const embed2 = new Discord.MessageEmbed()
        //.setAuthor(`Ticket from ${message.author.username}`, message.author.displayAvatarURL)
        .addField('Report (Preview):', `**Bug Report's Author:** ${message.author.username}\n**Server:** ${guild.name}\n**Full ticket:** ${args.join(' ')}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor(0xffd1dc);
    message.channel.send({ embed: embed2 });
    const embed = new Discord.MessageEmbed()
        //.setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Bug Report:', `**Report's Author:** ${message.author.username}\n**Server:** ${guild.name}\n**Full report:** ${args.join(' ')}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(0xffd1dc);
    cnl.send({ embed: embed })
};

module.exports.info = {
  name: "bug",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Reports a bug.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Bug Report)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}