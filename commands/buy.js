const Discord = require('discord.js')
let cost;
let type;
let name;

exports.run = async (client, message, args) => {
  
  const db = client.db
  
  let array = [
    'knife',
    'firecracker'
  ]


  let author = db.fetch(`money_${message.author.id}`);
  
  if (!args[0]) return message.channel.send('What would you like to purchase?~💖')
    else if (!array.includes(args[0])) {
      message.channel.send('I don\'t have that item in stock at the moment!~💖')
    } else if (cost > author) {
               message.channel.send('You don\'t have enough money to buy this!~💖')
     } else {
      if (args[1]) {
        if (isNaN(args[1])) {
          message.channel.send('This is the correct usage!~💖: `' + process.env.PREFIX + 'buy (item) <amount>`')
        } else {
          db.push(`inventory.${message.author.id}`, args[0]).loop(args[1])
        }
      } else {
        db.push(`inventory.${message.author.id}`, args[0])
      }
    }
  /*
    if(db.has(`pet_${message.author.id}`)) {
      message.channel.send(`You already have a pet!~💖`);
    };
    
    if (!args[0]) {
      message.channel.send(`What pet would you like to buy? Use my \`store\` command to see!~💖`);
    };

    if (args[0] == 'plant') {
      cost = 5000;
      type = 'plant';
    } else if (args[0] == 'bird') {
      cost = 7250;
      type = 'bird';
    } else if (args[0] == 'bunny') {
      cost = 10000;
      type = 'bunny';
    } else if (args[0] == 'kitty') {
      cost = 15000;
      type = 'kitty';
    } else if (args[0] == 'dog') {
      cost = 15000;
      type = 'dog';
    } else if (args[0] == 'sparkles') {
      cost = 1000000000;
      type = 'sparkle'
    }
  
  if (author < cost) return message.channel.send(`You need atleast $\`${cost}\` to purchase a pet ${type}!~💖`); // if the authors balance is less than 700$ return this, since the role costs 700$ in the store

        
          message.channel.send('What do you want to name your pet ' + type + '?~💖').then(() => {
          const filter = m => message.author.id === m.author.id;

          message.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
              .then(messages => {
                  db.subtract(`money_${message.author.id}`, cost)
                  db.set(`pet_${message.author.id}`, {petType: type, name: `${messages.first().content}`, hunger: 100, hygiene: 100, energy: 100, happiness: 100 })
                  message.channel.send(new Discord.MessageEmbed().setTitle(`Bought a new pet!~💖`).setColor(0xffd1dc).setDescription(`Pet: \`${(db.fetch(`pet_${message.author.id}.petType`)).toUpperCase()}\`\nName: ${db.fetch(`pet_${message.author.id}.name`)}`));
              })
              .catch(() => {
                  message.channel.send('Cancelled purchase!~💖');
              });
            });
            */
};

module.exports.info = {
  name: "buy",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Buys a specified item.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Item)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}