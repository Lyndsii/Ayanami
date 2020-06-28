const Discord = require('discord.js')


module.exports.run = async (client, message, args) => {

const db = client.db

    if (message.author.id !== process.env.OWNERID) {
        return message.channel.send('I apologise, shikikan, you do not have permission to use this command!~💖')
    }

    if (!args[0]) return message.channel.send('Please specify an amount to add, shikikan!~💖')
    if (isNaN(args[0])) return message.channel.send('That was not a valid number!~💖')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully added ' + args[0] + ' to ' + user + '!~💖')
    db.add(`money_${message.author.id}`, args[0])
  

}

module.exports.info = {
  name: "add-money",
  argsNeeded: true,
  userNeeded: true,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Adds a specified amount to a mentioned user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Amount & User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}