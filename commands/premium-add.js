module.exports.run = async (client, message, args) => {
  
  let db = client.db;
  let u = Object.keys(db.fetch(`premium.users`));
  
  if (message.author.id !== process.env.OWNERID) {
    message.channel.send(`You lack permission to use this command!~💖`);
  } else if (!args[0]) {
    message.channel.send(`Tell me the ID of the user that you want to give premium to!~💖`);
  } else if (u.includes(args[0])) {
    message.channel.send(`They're already a premium user, shikikan!~💖`);
  } else {
    db.set(`premium.users.${args[0]}`, true);
    await message.channel.send(`Added \`${args[0]}\` as a premium user!~💖`);
  }
};

module.exports.info = {
  name: "premium-add",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Adds a user as a premium one.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User ID)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}