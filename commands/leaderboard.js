const Discord = require('discord.js')
const sortby = require('lodash.sortby'); // npm i lodash.sortby
module.exports.run = async (client, message, args) => {
  

    function startsWith(db, str, options = { sort: undefined }) {
        let arr = [];
        for (const el of db.all()) {
            if (el.ID === null || !el.ID.startsWith(str)) continue;
            const { ID, data } = el;
            arr.push({
                ID: el.ID,
                data: el.data
            });
        }
        if (typeof options.sort === 'string') {
            if (options.sort.startsWith('.')) options.sort = options.sort.slice(1);
            options.sort = options.sort.split('.');
            arr = sortby(arr, options.sort);
            arr = arr.reverse();
        }
        return arr;
    }

    // Usage: startsWith(db, 'test', { sort: '.data' });

    const db = client.db

    let money = startsWith(db, `money_`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.cache.get(money[i].split('_')[1]).username

        content += `${i+1}. ${user} ~ ${money[i].data}$\n`
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0xffd1dc)

    message.channel.send(embed)




}

module.exports.info = {
  name: "leaderboard",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the leaderboard for the richest people',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}