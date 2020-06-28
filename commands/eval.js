const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.id !== process.env.OWNERID)
    return message.channel.send(
      "Sorry! You don't have permission to use this command!~💖"
    );

  else if (!args) {
    message.channel.send("Please tell me what to evaluate!~💖");
  }

  try {
    const code = args.join(" ");
    let evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    message.channel.send(
      new Discord.MessageEmbed().setDescription(`\`\`\`js\n${evaled}\`\`\``)
    );
  } catch (err) {
    message.channel.send(`>>> ERROR \`\`\`xl\n${err}\n\`\`\``);
  }
};

module.exports.info = {
  name: "eval",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: "Owner",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Evaluates JavaScript code.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Code)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}