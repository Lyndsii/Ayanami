const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let replies = ['rock', 'paper', 'scissors'];

    let result = replies[Math.floor(Math.random() * replies.length)];
    
    let res = {
      rock: '`🗻`',
      paper: '`📄`',
      scissors: '`✂️`'
    }
    
    let resEmoji = res[result];

    let uReply = args[0];
  
    let repEmoji = res[uReply]

    if (!uReply) return message.channel.send(`You have to include one of these responses: \`${replies.join('|').toUpperCase()}\`!~💖`);

    if (!replies.includes(uReply)) return message.channel.send(`Only these responses are accepted: \`${replies.join('|').toUpperCase()}\`!~💖`);



    if (result === uReply) {

        //console.log(replies[result]);

        return message.channel.send('We tied!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

    } else if (uReply === 'rock') {

        //console.log(replies[result]);

        if (result === 'paper') return message.channel.send('I won!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

        else return message.channel.send('You won!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

    } else if (uReply === 'scissors') {

        //console.log(replies[result]);

        if (result === 'rock') return message.channel.send('I won!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

        else return message.channel.send('You won!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

    } else if (uReply === 'paper') {

        //console.log(replies[result]);

        if (result === 'scissors') return message.channel.send('I won!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

        else return message.channel.send('You won!~💖\n**You:** ' + repEmoji + '\n**Me:** ' + resEmoji);

    }

}

module.exports.info = {
  name: "rps",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Fun",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Plays rock-paper-scissors with you.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Rock | Paper | Scissors)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}