module.exports.run = async (client, message, args) => {
  let { MessageEmbed } = require('discord.js');
  message.channel.send(new MessageEmbed()
                      .setTitle('Invite Me')
                      .setColor(0xffd1dc)
                      .setDescription('I appreciate the fact that you considered inviting me, shikikan!~💖 \n[Invite me here!](https://discordapp.com/oauth2/authorize?client_id=624559376660693003&scope=bot&permissions=1026944086)')
                      )
};

module.exports.info = {
  name: "invite",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Generates an invite link.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}