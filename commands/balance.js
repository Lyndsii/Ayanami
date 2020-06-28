const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  
const db = client.db

    let person;
    if(message.mentions.users.first()) {
      person = message.mentions.users.first()
    } else {
      person = message.author
    }
    

    let bal = db.fetch(`money_${person.id}`)

    if (bal === null) bal = 0;

    message.channel.send(new Discord.MessageEmbed().setTitle(`${person.username}'s Balance`).setDescription(`$\`${bal}\``).setColor(0xffd1dc))


}

module.exports.info = {
  name: "balance",
  argsNeeded: false,
  userNeeded: false,
  userOptional: true,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Shows a user\'s balance.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<User>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}