const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

    const db = client.db

    let timeout = 604800000 // 7 days in milliseconds, change if you'd like.
    let amount = 1000
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let weekly = await db.fetch(`weekly_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        message.channel.send(`You already collected your weekly reward, you can come back and collect it in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**!~💖`)
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Weekly`, message.author.displayAvatarURL)
    .setColor(0xffd1dc)
    .setDescription(`Weekly Rewards!~`)
    .addField(`Collected:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`weekly_${message.author.id}`, Date.now())
        
    }

}

module.exports.info = {
  name: "weekly",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Gives you your weekly rewards.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}