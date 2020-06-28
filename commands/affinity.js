module.exports.run = async (client, message, args) => {
  let { MessageEmbed } = require('discord.js');
  let user1 = message.mentions.users.first();
  let user2 = message.mentions.users.last();
  
  if (!user1) {
    message.channel.send('Please tag one or two people, shikikan!~💖')
  } else {
    if (!user2) {
      user2 = message.author
    }
    let love = user1.id.slice(0, 1) + user2.id.slice(0, 1)
    let hate = user1.id.slice(-1) + user2.id.slice(-1)
    // if (love > 100) {
    //   love = love / 2
    // }
    // if (hate > 100) {
    //   hate = hate / 2
    // }
    message.channel.send(new MessageEmbed()
                         .setColor(0xffd1dc)
                         .setTitle(`${user1.username} & ${user2.username}'s Affinity!~💖`)
                         .setDescription(`\`❤️\`: ${love}%\n\`💔\`: ${hate}%`)
                         .setImage("https://api.alexflipnote.dev/ship?user=" + user1.displayAvatarURL + "&user2=" + user2.displayAvatarURL)
                        )
  }
  
}

module.exports.info = {
  name: 'affinity',
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: 'Fun',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'See the affinity level between two people',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User) <User>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}