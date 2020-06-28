const Discord = require('discord.js')

module.exports.run = async (client, message, args, config) => {

    const db = client.db


    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)


    if (!user) {
        return message.channel.send('You forgot to mention somebody!~💖')
    } else 
    if (!args[1]) {
        return message.channel.send('Please specify an amount!~💖')
    } else 
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be paid!~💖')
    } else 
  
    
    if(user.id == message.author.id) {
      message.channel.send('You cannot pay *yourself*!~💖');
    } else 

    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance!~💖`)
    } else {
      message.channel.send(`${message.author.tag}, You successfully paid ${user.user.username} $\`${args[1]}\`!~💖`)
      db.add(`money_${user.id}`, args[1])
      db.subtract(`money_${message.author.id}`, args[1])
    }

    




}

module.exports.info = {
  name: "pay",
  argsNeeded: true,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Pays a specified user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User & Amount)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}