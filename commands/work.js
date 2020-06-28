const Discord = require('discord.js')

let jobName, jobPay;

exports.run = async (client, message, args, config) => {
  const db = client.db

  /*if (db.has(`work_${message.author.id}`) !== true) {
    if (args[0] == 'janitor') {
      jobName = 'janitor'
      jobPay = 15
    } else if (args[0] == 'gamer') {
      jobName = 'gamer'
      jobPay = 20
    } else if (args[0] == 'cosplayer') {
      jobName = 'cosplayer'
      jobPay = 50
    } else if (args[0] == 'actor') {
      jobName = 'actor'
      jobPay = 100
    } else if (args[0] == 'premium') {
      if (db.fetch(`premium.users`).includes(message.author.id)) {
        jobName = 'premium'
        jobPay = 300
      } else {
        message.channel.send('You need to be a premium user to work as this!')
      }

    } else if (args[0] == 'owner') {
      if (message.author.id == process.env.OWNERID) {
              jobName = 'owner'
              jobPay = 600
      } else {
        message.channel.send('You need to be the owner of me to work as this!~💖')
      }
    }  
    db.set(`job_${message.author.id}`, { nameJob: jobName, payJob: jobPay })
    message.channel.send(new Discord.MessageEmbed()
                        .setTitle('You need a job!')
                        .setDescription('Use my ' + process.env.PREFIX + '`work list` command to view all the jobs you could work at!~💖')
                        .setColor(0xffd1dc)
                        )
  } else if (args[0] == 'list') {
    message.channel.send(new Discord.MessageEmbed()
                        .setColor(0xffd1dc)
                        .setTitle('Here are all the available jobs!~💖')
                        .setDescription('◈ **Janitor** | $`15`\n◈ **Gamer** | $`20`\n◈ **Cosplayer** | $`50`\n◈ **Actor** | $`100`\n◈ **Premium** | $`300`\n◈ **Owner** | $`600`')
                        )
  } else if (db.has(`work_${message.author.id}`) == true) {
    db.add(`money_${message.author.id}`, db.fetch(`job_${message.author.id}.payJob`))
    message.channel.send(new Discord.MessageEmbed()
                        .setColor(0xffd1dc)
                        .setTitle(`Successful Shift!`)
                        .setDescription(`You worked as a ${db.fetch(`job_${message.author.id}.nameJob`)} and received $\`${db.fetch(`job_${message.author.id}.payJob`)}\` for your hard work!~💖`)
                        )
  }*/

  
  
  if(!args[0]) {
    message.channel.send(new Discord.MessageEmbed().setColor(0xffd1dc).setTitle('Please specify a job to work at!\nUsage: `prostitute`|`constructor`|`programmer`~💖'))
  } else if (args[0] == 'prostitute') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a prostitute & got payed $${amount} for having ||sex||!~💖`)
        .setColor(0xffd1dc)
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed $${amount} for rebuilding the empire state building!~💖`)
        .setColor(0xffd1dc)
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programmer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned $${amount}!~💖`)
        .setColor(0xffd1dc)
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    }



/*
 else if (args[0] == '') {
    jobName = ''
    jobPay = ''
  }
*/


    // simple work command
    /*
    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number.
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}, it payed off!`, message.author.displayAvatarURL) 
    .setDescription(`${message.author}, you've worked and earned ${amount}$ !`)
    .setColor("RANDOM")
    
    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    */


}

module.exports.info = {
  name: "work",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Makes you work at a specified job',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Job)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}