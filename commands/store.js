module.exports.run = async (client, message, args) => {
  let db = client.db
  let { MessageEmbed } = require("discord.js");
  if (!args[0]) {
    message.channel.send(new MessageEmbed()
                        .setTitle(`Stores`)
                        .setDescription('(If the store type has a padlock next to it, then it isn\'t quite finished!~💖)')
                        .setColor(0xffd1dc)
                        .addField(`Pet Store [🔒]`, '`' + process.env.PREFIX + 'store pets`', true)
                        .addField(`Items Store`, '`' + process.env.PREFIX + 'store items`', true)
                        )
  }
  
  /*if (args[0] == 'pets') {
    message.channel.send(new MessageEmbed()
    .setTitle(`Pet Store!~💖`)
    .setColor(0xffd1dc)
    .setFooter(`$${db.fetch(`money_${message.author.id}`)} to spend!~💖`)
    .setDescription('◈**🌱 Plant** - $`5 000`\n◈**🐣 Bird** - $`7 250`\n◈**🐇 Bunny** - $`10 000`\n◈**🐱 Kitty** - $`15 000`\n◈**🐶 Dog** - $`15 000`\n◈**✨ Sparkles** - $`1 000 000 000`'))
  //  db.set(`pet_${message.author.id}`, {type: 2 })
  }*/
  
  if (args[0] == 'items') {
    message.channel.send(new MessageEmbed()
    .setTitle(`Item Store!~💖`)
    .setColor(0xffd1dc)
    .setFooter(`$${db.fetch(`money_${message.author.id}`)} to spend!~💖`)
    .setDescription('◈**🔪 Knife** - $`100`\n◈**🧨 Firecracker** - $`15`'))
  }
  
}

module.exports.info = {
  name: "store",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the available items in the store.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<Store Type>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}