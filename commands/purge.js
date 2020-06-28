module.exports.run = async(client, message, args) => {



    message.delete()



    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to bulk delete messages!~💖")



    if(!args[0]) return message.channel.send("Please specify the amount of messages you want me to delete!~💖")



    await message.channel.bulkDelete(args[0])

    await message.channel.send(`Purged ${args[0]} messages!~💖`).then(msg => msg.delete(2500));

    

}

module.exports.info = {
  name: "purge",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Moderation",
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Bulkdeletes a specified number of messages.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Amount)',
  administratorOnly: true,
  moderatorOnly: false,
  hidden: false
}