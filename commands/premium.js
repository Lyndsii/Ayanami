module.exports.run = async (client, message, args) => {
  let db = client.db
  let users = Object.keys(db.fetch(`premium.users`));
  if (!users.includes(message.author.id)) {
    message.channel.send(`Only premium users can use this command!~💖`)
  } else {
    message.channel.send(`\`\`\`yaml\n${users.join(',\n')}\n\`\`\``);
  }
};

module.exports.info = {
  name: "premium",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Premium",
  guildOnly: false,
  premiumOnly: true,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a message of all the premium users.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}