module.exports = async(oldMessage, newMessage) => {
  let { MessageEmbed } = require('discord.js');
  let newsChannel;
  if (newMessage.author.bot) return;
  
  // if (newMessage.guild.id == '343572980351107077') {
    // newsChannel = newMessage.guild.channels.find(ch => ch.name == 'bot-spam')
    //await newsChannel.send(new MessageEmbed().setTitle('**A Message Has Been Edited!~💖**').setDescription('**Author:** ' + newMessage.author.username).setColor(0xffd1dc).addField('» Old Message',`\`\`\`${oldMessage.content}\`\`\``, true).addField('» New Message',`\`\`\`${newMessage.content}\`\`\``, true))
  // } else {
    // newsChannel = newMessage.guild.channels.find(ch => ch.name == 'logs')
    //await newsChannel.send(new MessageEmbed().setTitle('**A Message Has Been Edited!~💖**').setDescription('**Author:** ' + newMessage.author.username).setColor(0xffd1dc).addField('» Old Message',`\`\`\`${oldMessage.content}\`\`\``, true).addField('» New Message',`\`\`\`${newMessage.content}\`\`\``, true))
  // }
  
  //await newsChannel.send(new MessageEmbed().setTitle('**A Message Has Been Edited!~💖**').setDescription('**Author:** ' + newMessage.author.tag).setColor(0xffd1dc).addField('» Old Message',`\`\`\`${oldMessage.content}\`\`\``, true).addField('» New Message',`\`\`\`${newMessage.content}\`\`\``, true))
} 