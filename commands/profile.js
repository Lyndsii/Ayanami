const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  let mentionedUser = message.mentions.users.first() || message.author;
  let member = message.guild.member(mentionedUser);
  const obj = {
        idle: "<:idle:637785704658632714>Idle",
        dnd: "<:dnd:637785686405021736>Do Not Disturb",
        invisible: "<:offline:637785738645340160>Offline",
        online: "<:online:637785721385517057>Online"
    }
  let bio = db.fetch(`${mentionedUser.id}.custombio`) || "None"
  // let ss = db.fetch(`marriage_${mentionedUser.id}.lover`);
  // let spouse;
  // if (db.has(`marriage_${mentionedUser.id}.lover`) || db.fetch(`marriage_${mentionedUser.id}.lover`) !== undefined || db.fetch(`marriage_${mentionedUser.id}.lover`) !== null || db.fetch(`marriage_${mentionedUser.id}.lover`) != '{}') {
      // spouse = client.users.get(ss).username
  // } else {
    // spouse = "None"
  // }
  // let spouse = client.users.get(spouseID).username || "None"
  let level = db.fetch(`level_${mentionedUser.id}`)
  message.channel.send(new Discord.MessageEmbed()
                      .setColor(0xffd1dc)
                      .setTitle(`➼ ${mentionedUser.username}'s Profile`)
                      .setThumbnail(mentionedUser.displayAvatarURL)
                      .addField(`➤ Nickname`,`${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
                      .addField(`➤ Balance`,`$\`${db.fetch(`money_${mentionedUser.id}`)}\``, true)
                      .addField(`➤ Level`,`\`Level - ${level}\`\n\`XP - ${db.fetch(`xp_${message.author.id}`)}\`\n\`XP Left - ${(5 * Math.pow(level, 2) + 50 * level + 100) - (db.fetch(`xp_${message.author.id}`))}\``, true)
                      .addField(`➤ Bio`, `${bio}`, true)
                      // .addField(`➤ Spouse`, `${spouse}`, true)
                      //.addField(`➤ Status`, `${obj[mentionedUser.presence.status]}`, true)
                      .addField(`➤ Roles`, member.roles.map(r => r).join(' | ') , true)
                      )
}

module.exports.info = {
  name: "profile",
  argsNeeded: false,
  userNeeded: false,
  userOptional: true,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the profile for either you or a mentioned user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<User>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}