const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {

    if (!args[0]) {
      message.channel.send("Please provide a steam user ID!~💖");
    } else {
      fetch("https://api.alexflipnote.dev/steam/user/" + args[0]).then(
        res => {
          if (!res.ok) {
            message.channel.send('Please enter a valid Steam ID!~💖')
          } else {
          res.json().then(body => {
            
              
            
            let realName = body.profile.realname;
            if (realName == null) {
              realName = "None";
            }
            let obj = {
              true: "Yes",
              false: "No"
            };

            if (!body) {
              return message.reply(
                "This command is experiencing a few issues!~💖"
              );
            } else {
              //if (!body.profile) return message.channel.send('Invalid Steam ID!~💖')

              let embed = new Discord.MessageEmbed()
                .setColor(0xffd1dc)
                .setThumbnail(body.avatars.avatarfull)
                .setTitle(body.profile.username)
                .setURL(body.profile.url)
                .setDescription(
                  `Real Name: ${realName}\nSummary: ${
                    body.profile.summary
                  }\nLocation: ${body.profile.location}\nState: ${
                    body.profile.state
                  }\nPrivacy: ${body.profile.privacy}\nCreated At: ${
                    body.profile.timecreated
                  }\nVAC Banned: ${obj[body.profile.vacbanned]}`
                )
                .addField(
                  `IDs`,
                  `Steam ID 3: ${body.id.steamid3}\nSteam ID 32: ${body.id.steamid32}\nSteam ID 64: ${body.id.steamid64}\nCustom URL: ${body.id.customurl}`,
                  true
                )
              .setFooter(
                `Powered by: AlexFlipnote API`
              );
              // .addField(`Tint`, body.tint.join(`,\n`), true)

              message.channel.send(embed);
            }
          })
          }
                                                                                }
      );
    }
  
};

module.exports.info = {
  name: "steamuser",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: "Sends a steam user's information.",
  disabledGlobal: false,
  disabledGuild: false,
  usage: "(Steam ID)",
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
};
