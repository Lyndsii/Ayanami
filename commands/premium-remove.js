module.exports.run = async (client, message, args) => {
  
  let db = client.db
  let u = Object.keys(db.fetch(`premium.users`))
  
  if (message.author.id !== process.env.OWNERID) {
    message.channel.send(`You lack permission to use this command!~💖`);
  } else if (!args[0]) {
    message.channel.send(`Tell me the ID of the user who you want to remove premium from!~💖`);
  } else if (!u.includes(args[0])) {
    message.channel.send(`That person is not a premium user anyway!~💖`)
  } else {
    db.delete(`premium.users.${args[0]}`)
    await message.channel.send(`Removed \`${args[0]}\` as a premium user!~💖`);
  }
};

module.exports.info = {
  name: "premium-remove",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Removes a user as a premium one.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User ID)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}