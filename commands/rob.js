const Discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  const db = client.db
  let user = message.mentions.members.first();

  let author = await db.fetch(`money_${message.author.id}`); // fetch authors balance

  if (!user) {
    return message.channel.send("Sorry, you forgot to mention somebody!~💖");
  } else 

  if (user) {
    let targetuser = await db.fetch(`money_${user.id}`); // fetch mentioned users balance
    if (author < 250) {
      // if the authors balance is less than 250, return this.
      return message.channel.send(
        "You need atleast $250 to rob somebody, shikikan!~💖"
      );
    } else 

    if (targetuser <= 0) {
      // if mentioned user has 0 or less, it will return this.
      return message.channel.send(
        `${user.user.username} does not have anything to rob!~💖`
      );
    } else 
    
    if(user.id == message.author.id) {
      message.channel.send('You cannot rob *yourself*, shikikan!~💖');
    } else {
      let random = Math.floor(Math.random() * 1000) + 1; // random number 200-1, you can change 200 to whatever you'd like

      let embed = new Discord.MessageEmbed()
        .setDescription(
          `${message.author} you robbed ${user} and got away with $${random}!~💖`
        )
        .setColor(0xffd1dc)
        .setTimestamp();
      message.channel.send(embed);

      db.subtract(`money_${user.id}`, random);
      db.add(`money_${message.author.id}`, random);
    }

    
  }
};

module.exports.info = {
  name: "rob",
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Robs a specified user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}