module.exports.run = async (client, message, args) => {

    if (message.author.id !== process.env.OWNERID) return message.channel.send(`You lack the permission to use this command!~💖`);

    if (!args[0]) return message.channel.send(`What should I reload?~💖`)

    let commandsN = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandsN}.js`)];
        client.commands.delete(commandsN)
        const pull = require(`./${commandsN}.js`)
        client.commands.set(commandsN, pull)
    } catch (e) {
        return message.channel.send(`There was an error with reloading \`${commandsN.toUpperCase()}\`!~💖\n${e}`);
    }

    message.channel.send(`Reloaded: \`${commandsN.toUpperCase()}\`!~💖`);

}

module.exports.info = {
  name: "reload",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Reloads things.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Command)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}