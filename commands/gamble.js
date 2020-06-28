let { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  let db = client.db
  let botRoll = [Math.floor(Math.random() * 24 + 1)];
  let userRoll = [Math.floor(Math.random() * 24 + 1)];
  
  if (!args[0]) {
    message.channel.send('Please bet something!~💖')
  } else if (args[0] > db.fetch(`money_${message.author.id}`)) {
    message.channel.send('You can\'t bet an amount higher than your bank balance!~💖')
  } else {
    
    let gambleMessage = await message.channel.send(`Gambling...~💖`)
    
    if (botRoll > userRoll) {
      //let gambleMessage = await message.channel.send(`Gambling...~💖`)
      db.subtract(`money_${message.author.id}`, args[0])
      gambleMessage.edit(new MessageEmbed()
                         .setTitle('You Lost!')
                         .setColor(0xffd1dc)
                         .setDescription(`You lost $\`${args[0]}\`!~💖`)
                         .addField('Your Roll:','```js\n' + userRoll + '\n```', true)
                         .addField('My Roll:','```js\n' + botRoll + '\n```', true)
                        )
    } else if (botRoll = userRoll) {
      //let gambleMessage = await message.channel.send(`Gambling...~💖`)
      //db.subtract(`money_${message.author.id}`, args[0])
      gambleMessage.edit(new MessageEmbed()
                         .setTitle('You Tied!')
                         .setColor(0xffd1dc)
                         .setDescription(`You tied and kept $\`${args[0]}\`!~💖`)
                         .addField('Your Roll:','```js\n' + userRoll + '\n```', true)
                         .addField('My Roll:','```js\n' + botRoll + '\n```', true)
                        )
    } else if (userRoll > botRoll) {
      //let gambleMessage = await message.channel.send(`Gambling...~💖`)
      db.add(`money_${message.author.id}`, args[0])
      gambleMessage.edit(new MessageEmbed()
                         .setTitle('You Won!')
                         .setColor(0xffd1dc)
                         .setDescription(`You won $\`${args[0]}\`!~💖`)
                         .addField('Your Roll:','```js\n' + userRoll + '\n```', true)
                         .addField('My Roll:','```js\n' + botRoll + '\n```', true)
                        )
    }
  }  
}

module.exports.info = {
  name: "gamble",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Gambles a specified amount of money.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Amount)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}