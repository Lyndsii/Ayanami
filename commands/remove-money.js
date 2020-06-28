const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {
 // just copy & paste it in here.
    const db = client.db

    if (message.author.id !== process.env.OWNERID) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('You\'re missing the required permissions to use this command, shikikan!~💖').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); // delete after 2.5 seconds.
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`Shikikan, you need to input a valid number to remove!~💖`) // if args[0] (first input) is not a number, return.
    db.subtract(`money_${user.id}`, args[0]) // subtract it now
    let bal = await db.fetch(`money_${user.id}`)
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `$${args[0]}`)
    .addField(`Balance Updated`, `$${bal}!`)
    .setColor(0xffd1dc) // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)





}

module.exports.info = {
  name: "remove-money",
  argsNeeded: true,
  userNeeded: true,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Removes money from a specified user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User & Amount)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}