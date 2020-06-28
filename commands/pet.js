module.exports.run = async (client, message, args) => {
//   let { MessageEmbed } = require('discord.js');
//   let db = client.db
  
//   if (db.has(`pet_${message.author.id}`) !== true) {
//     message.channel.send(new MessageEmbed()
//                         .setTitle(`You don't have a pet! Use my \`store\` command to buy one!~💖`)
//                         .setColor(0xffd1dc)
//                         )
//   }
  
//   let hunger = db.fetch(`pet_${message.author.id}.hunger`)
//   let hygiene = db.fetch(`pet_${message.author.id}.hygiene`)
//   let energy = db.fetch(`pet_${message.author.id}.energy`)
//   let happiness = db.fetch(`pet_${message.author.id}.happiness`)
//   let money = db.fetch(`money_${message.author.id}`)
  
//   let hub;
//   let hyb;
//   let enb;
//   let hab;
  
//   if (hunger = 100) {
//     hub = '■■■■■■■■■■';
//   } else if (hunger >= 90) {
//     hub = '■■■■■■■■■□';
//   } else if (hunger >= 80) {
//     hub = '■■■■■■■■□□';
//   } else if (hunger >= 70) {
//     hub = '■■■■■■■□□□';
//   } else if (hunger >= 60) {
//     hub = '■■■■■■□□□□';
//   } else if (hunger >= 50) {
//     hub = '■■■■■□□□□□';
//   } else if (hunger >= 40) {
//     hub = '■■■■□□□□□□';
//   } else if (hunger >= 30) {
//     hub = '■■■□□□□□□□';
//   } else if (hunger >= 20) {
//     hub = '■■□□□□□□□□';
//   } else if (hunger >= 10) {
//     hub = '■□□□□□□□□□';
//   } else if (hunger = 0) {
//     hub = '□□□□□□□□□□';
//   };
  
//   if (hygiene = 100) {
//     hyb = '■■■■■■■■■■';
//   } else if (hygiene >= 90) {
//     hyb = '■■■■■■■■■□';
//   } else if (hygiene >= 80) {
//     hyb = '■■■■■■■■□□';
//   } else if (hygiene >= 70) {
//     hyb = '■■■■■■■□□□';
//   } else if (hygiene >= 60) {
//     hyb = '■■■■■■□□□□';
//   } else if (hygiene >= 50) {
//     hyb = '■■■■■□□□□□';
//   } else if (hygiene >= 40) {
//     hyb = '■■■■□□□□□□';
//   } else if (hygiene >= 30) {
//     hyb = '■■■□□□□□□□';
//   } else if (hygiene >= 20) {
//     hyb = '■■□□□□□□□□';
//   } else if (hygiene >= 10) {
//     hyb = '■□□□□□□□□□';
//   } else if (hygiene = 0) {
//     hyb = '□□□□□□□□□□';
//   };
  
//   if (energy = 100) {
//     enb = '■■■■■■■■■■';
//   } else if (energy >= 90) {
//     enb = '■■■■■■■■■□';
//   } else if (energy >= 80) {
//     enb = '■■■■■■■■□□';
//   } else if (energy >= 70) {
//     enb = '■■■■■■■□□□';
//   } else if (energy >= 60) {
//     enb = '■■■■■■□□□□';
//   } else if (energy >= 50) {
//     enb = '■■■■■□□□□□';
//   } else if (energy >= 40) {
//     enb = '■■■■□□□□□□';
//   } else if (energy >= 30) {
//     enb = '■■■□□□□□□□';
//   } else if (energy >= 20) {
//     enb = '■■□□□□□□□□';
//   } else if (energy >= 10) {
//     enb = '■□□□□□□□□□';
//   } else if (energy = 0) {
//     enb = '□□□□□□□□□□';
//   };
  
//   if (happiness = 100) {
//     hab = '■■■■■■■■■■';
//   } else if (happiness >= 90) {
//     hab = '■■■■■■■■■□';
//   } else if (happiness >= 80) {
//     hab = '■■■■■■■■□□';
//   } else if (happiness >= 70) {
//     hab = '■■■■■■■□□□';
//   } else if (happiness >= 60) {
//     hab = '■■■■■■□□□□';
//   } else if (happiness >= 50) {
//     hab = '■■■■■□□□□□';
//   } else if (happiness >= 40) {
//     hab = '■■■■□□□□□□';
//   } else if (happiness >= 30) {
//     hab = '■■■□□□□□□□';
//   } else if (happiness >= 20) {
//     hab = '■■□□□□□□□□';
//   } else if (happiness >= 10) {
//     hab = '■□□□□□□□□□';
//   } else if (happiness = 0) {
//     hab = '□□□□□□□□□□';
//   };
  
//   db.fetch(`pet_${message.author.id}`)
  
//   if (args[0] == 'actions') {
//     message.channel.send(new MessageEmbed()
//                         .setColor(0xffd1dc)
//                         .setTitle(`**Pet Commands!~💖**`)
//                         .setDescription('`feed` - Feeds your pet!~💖\n`wash` - Give your pet a bath!~💖\n`sleep` - Make your pet rest!~💖\n`play` - Play with your pet!~💖')
//                         );
//   }
//   if (args[0] == 'feed') {
    
//     if (hunger = 100) {
      
//       message.channel.send(`Your pet ${db.fetch(`pet_${message.author.id}.type`)} refuses to eat anymore food!~💖`)
    
//     } else if (hunger >= 75) {
      
//       if (money < 10) {
//         message.channel.send(`You need $\`10\` to feed your pet!~💖`)
        
//       } else {

//         let feedAmt = 100 - hunger

//         db.add(`pet_${message.author.id}.hunger`, feedAmt)

//         message.channel.send(`You spent $\`10\` to nourish your pet ${db.fetch(`pet_${message.author.id}.type`)}!~💖`)

//         db.subtract(`money_${message.author.id}`, 10)
//       }
      
//     } else {
      
//       let feedAmt = 25
      
//       if (money < 10) {
        
//         message.channel.send(`You need $\`10\` to feed your pet!~💖`)
        
//       } else {
      
//       db.add(`pet_${message.author.id}.hunger`, feedAmt)
      
//       message.channel.send(`You spent $\`10\` to nourish your pet ${db.fetch(`pet_${message.author.id}.type`)}!~💖`)
      
//       db.subtract(`money_${message.author.id}`, 10)
//       }
//     }
//   }
//   if (args[0] == 'wash') {
    
//     if (hygiene = 100) {
      
//       message.channel.send(`Your pet ${db.fetch(`pet_${message.author.id}.type`)} is squeaky clean!~💖`)
    
//     } else if (hygiene >= 75) {
      
//       if (money < 40) {
//         message.channel.send(`You need $\`40\` to wash your pet!~💖`)
//       } else {

//         let washAmt = 100 - hygiene

//         db.add(`pet_${message.author.id}.hygiene`, washAmt)

//         message.channel.send(`You spent $\`40\` to bathe your pet ${db.fetch(`pet_${message.author.id}.type`)}!~💖`)

//         db.subtract(`money_${message.author.id}`, 40)
//       }
      
//     } else {

//         let washAmt = 25

//         if (money < 40) {
//           message.channel.send(`You need $\`40\` to wash your pet!~💖`)
//         } else {

//         db.add(`pet_${message.author.id}.wash`, washAmt)

//         message.channel.send(`You spent $\`40\` to bathe your pet ${db.fetch(`pet_${message.author.id}.type`)}!~💖`)

//         db.subtract(`money_${message.author.id}`, 40)
//       }
//     }
//   }
//   if (args[0] == 'sleep') {
    
//     if (energy = 100) {
      
//       message.channel.send(`Your pet ${db.fetch(`pet_${message.author.id}.type`)} is feeling energetic!~💖`)
    
//     } else {
      
//       let sleepAmt = 100 - energy
      
//       db.add(`pet_${message.author.id}.energy`, sleepAmt)
      
//       message.channel.send(`You made your pet ${db.fetch(`pet_${message.author.id}.type`)} take a nap!~💖`)
      
//     }
//   }
//   if (args[0] == 'play') {
    
//     if (happiness = 100) {
      
//       message.channel.send(`Your pet ${db.fetch(`pet_${message.author.id}.type`)} isn't bothered to do anything with you!~💖`)
    
//     } else if (happiness >= 75) {
      
//       if (money < 45) {
        
//         message.channel.send(`You need $\`45\` to play with your pet!~💖`)
        
//       } else {

//         let playAmt = 100 - happiness

//         db.add(`pet_${message.author.id}.happiness`, playAmt)

//         message.channel.send(`You spent $\`45\` to play games with your ${db.fetch(`pet_${message.author.id}.type`)}!~💖`)

//         db.subtract(`money_${message.author.id}`, 45)
//       }
      
//     } else {
      
//       if (money < 45) {
        
//         message.channel.send(`You need $\`45\` to play with your pet!~💖`)
      
//       } else {

//         let playAmt = 25

//         db.add(`pet_${message.author.id}.happiness`, playAmt)

//         message.channel.send(`You spent $\`45\` to play games with your pet ${db.fetch(`pet_${message.author.id}.type`)}!~💖`)

//         db.subtract(`money_${message.author.id}`, 45)
//       }
//     }
//   }
//   if (args[0] == 'abandon') {
//     message.channel.send('Are you sure you want to abandon your pet?~💖\n(`YES`/`NO`)').then(() => {
//     const filter = m => message.author.id === m.author.id;

//     message.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
//         .then(messages => {
//             if (messages.first().content == 'yes') {
//               db.delete(`pet_${message.author.id}`)
//               message.channel.send('You abandoned your pet!~💖')
//             } else {
//               message.channel.send(`You didn't abandon your pet!~💖`);
//             }
//         })
//         .catch(() => {
//             message.channel.send('You didn\'t abandon your pet!~💖');
//         });
// });
//   }
    
//   setInterval(() => {
//     db.subtract(`pet_${message.author.id}.hunger`, 3)
//     db.subtract(`pet_${message.author.id}.hygiene`, 4)
//     db.subtract(`pet_${message.author.id}.energy`, 2)
//     db.subtract(`pet_${message.author.id}.happiness`, 1)
//   }, 3600)
  
//   message.channel.send(new MessageEmbed()
//                       .setTitle(`\`${(db.fetch(`pet_${message.author.id}.name`)).toUpperCase()}\``)
//                       .setColor(0xffd1dc)
//                       .setDescription(`Want to see all the things you can do with \`${(db.fetch(`pet_${message.author.id}.name`)).toUpperCase()}\`? Use my \`${process.env.PREFIX}pet actions\` command!~💖`)
//                       .addField('Hunger',`[${hub}](https://youtu.be/yVib2ZWKAbE) (${db.fetch(`pet_${message.author.id}.hunger`)}%)`, true)
//                       .addField('Hygiene',`[${hyb}](https://youtu.be/yVib2ZWKAbE) (${db.fetch(`pet_${message.author.id}.hygiene`)}%)`, true)
//                       .addBlankField()
//                       .addField('Energy',`[${enb}](https://youtu.be/yVib2ZWKAbE) (${db.fetch(`pet_${message.author.id}.energy`)}%)`, true)
//                       .addField('Happiness',`[${hab}](https://youtu.be/yVib2ZWKAbE) (${db.fetch(`pet_${message.author.id}.happiness`)}%)`, true)
//                       )
}

module.exports.info = {
  name: "pet",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the statistics for your pet.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}