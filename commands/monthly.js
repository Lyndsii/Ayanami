const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

    const db = client.db

    let timeout = 2592000000 // 30 days in milliseconds, change if you'd like.
    let amount = 5000
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let monthly = await db.fetch(`monthly_${message.author.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
        let time = ms(timeout - (Date.now() - monthly));

        message.channel.send(`You already collected your monthly reward, you can come back and collect it in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**!~💖`)
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Monthly`, message.author.displayAvatarURL)
    .setColor(0xffd1dc)
    .setDescription(`Monthly Rewards!~`)
    .addField(`Collected:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`monthly_${message.author.id}`, Date.now())
        
    }

}

module.exports.info = {
  name: "monthly",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Gives you your monthly rewards.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}