const fs = require("fs");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.author.id !== process.env.OWNERID) return message.channel.send('Sorry, but this command is a placeholder!');
  if (args[0]) {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command)
      const obj = {
        true: '<:toggleOn:449280056322162708> ',
        false: '<:toggleOff:449287667633618956> '
      }
      message.channel.send(`**Name:** ${command.info.name}\n**Args Needed:** ${obj[command.info.argsNeeded]}\n**User Needed:** ${obj[command.info.userNeeded]}\n**User Optional:** ${obj[command.info.userOptional]}\n**Owner Only:** ${obj[command.info.ownerOnly]}\n**Category:** ${command.info.category}\n**Guild Only:** ${obj[command.info.guildOnly]}\n**Premium Only:** ${obj[command.info.premiumOnly]}\n**Voter Only:** ${obj[command.info.voterOnly]}\n**NSFW:** ${obj[command.info.nsfw]}\n**Description:** ${command.info.description}\n**Disabled Global:** ${obj[command.info.disabledGlobal]}\n**Disabled Guild:** ${obj[command.info.disabledGuild]}\n**Usage:** ${process.env.PREFIX}${command.info.name} ${command.info.usage}\n**Administrator Only:** ${obj[command.info.administratorOnly]}\n**Moderator Only:** ${obj[command.info.moderatorOnly]}\n**Hidden:** ${obj[command.info.hidden]}`)
    } else {
      message.channel.send(`I don't have that command!~💖`)
    }
    
  } else {
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }
    let r = new MessageEmbed().setTitle('Commands')
    var namelist = "";
    var desclist = "";
    var usage = "";
    
    let result = jsfiles.forEach((f, i) => {
        let props = require(`./${f}`);
        namelist = props.info.name;
        desclist = props.info.description;
        usage = props.info.usage;

        // send help text
      //message.channel.send(`**${namelist}** - ${desclist} || \`${process.env.PREFIX}${namelist} ${usage}\``);
      
      r.addField(`**${namelist}**`, `${desclist} || \`${process.env.PREFIX}${namelist} ${usage}\``)
                          
      
    });
      message.channel.send(r)
    })
  }

}

module.exports.info = {
  name: "test",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a message of all the commands.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<Command>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}