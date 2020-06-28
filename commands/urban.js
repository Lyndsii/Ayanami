const Discord = require("discord.js");
const querystring = require('querystring');
const fetch = require('node-fetch');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports.run = async (client, message, args) => {
  
  if (message.channel.nsfw == true) {
      if (!args.length) {

          return message.channel.send('You need to supply a search term!~💖');

      }

      const query = querystring.stringify({ term: args.join(' ') });

      const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

      if (!list.length) {

          return message.channel.send(`No results found for \`${args.join(' ')}\`!~💖`);

      }
      const [answer] = list;

      const embed = new Discord.MessageEmbed()

          .setColor(0xffd1dc)

          .setTitle(answer.word)

          .setURL(answer.permalink)

          .addField('Definition', trim(answer.definition, 1024), true)

          .addField('Example', trim(answer.example, 1024), true)

          .addField('👍', `${answer.thumbs_up}`, true)

          .addField('👎', `${answer.thumbs_down}`, true);

      message.channel.send(embed);
  } else {
    message.channel.send('This command cannot be used outside of NSFW channels!~💖')
  }
}

module.exports.info = {
  name: "urban",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "NSFW",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: true,
  description: 'Searches for a given query on the urban dictionary.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Search)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}