const Discord = require("discord.js");
const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please provide the name of an anime!~💖')
  } else {
    fetch("https://kitsu.io/api/edge/anime?filter[text]=" + args.join('%20'))

    .then(res => res.json()).then(body => {
    

      if (!body) return message.reply("This command is experiencing a few issues!~💖")
  
      let b = body.data[0];
      
      if (!b) {
        let e = new Discord.MessageEmbed()
        .setColor(0xffd1dc)
        .setTitle('404')
        .setDescription('Anime Not Found.')
        message.channel.send(e)
      } else {
        let obj = {
          true: "Yes",
          false: "No"
        }
        let embed = new Discord.MessageEmbed()
        .setColor(0xffd1dc)
        .setThumbnail(b.attributes.posterImage.original)
        .setTitle(`${b.attributes.canonicalTitle} (ID: ${b.id})`)
        .setURL('https://www.youtube.com/watch?v=' + b.attributes.youtubeVideoId)
        .setDescription(`${b.attributes.synopsis}`)
        .addField(`Status`,`${b.attributes.status.slice(0, 1).toUpperCase() + b.attributes.status.slice(1)}`, true)
        .addField(`Types`,`General: ${b.type.slice(0, 1).toUpperCase() + b.type.slice(1)}\nSub: ${b.attributes.subtype.slice(0, 1).toUpperCase() + b.attributes.subtype.slice(1)}\nShow: ${b.attributes.showType.slice(0, 1).toUpperCase() + b.attributes.showType.slice(1)}`, true)
        .addField(`Popularity Rank`,`Top ${b.attributes.popularityRank}`, true)
        .addField(`Aired`,`From **${b.attributes.startDate}** to **${b.attributes.endDate}**`, true)
        .addField(`Episodes`,`Total Episodes: ${b.attributes.episodeCount}\nAverage Length: ${b.attributes.episodeLength} minutes\nTotal Length: ${b.attributes.totalLength} minutes`, true)
        .addField(`Average Rating`,`${b.attributes.averageRating}/100`, true)
        .addField(`Age Rating`,`${b.attributes.ageRatingGuide} (${b.attributes.ageRating})`, true)
        .addField(`NSFW?`,`${obj[b.attributes.nsfw]}`, true)
        .addField(`Titles`,`English: ${b.attributes.titles.en_jp}\nJapanese: ${b.attributes.titles.ja_jp.slice(0, 1).toUpperCase() + b.attributes.titles.ja_jp.slice(1)}`, true)
        .setFooter(`Powered by: [Kitsu.io API](https://kitsu.io)`)
        // .addField(`Regional Bloc(s)`, `Name: ${b.regionalBlocs[0].name || "None"}\nOther Name(s): ${b.regionalBlocs[0].otherNames.join(', ') || "None"}\nAcronym: ${b.regionalBlocs[0].acronym || "None"}\nOther Acronym(s): ${b.regionalBlocs[0].otherAcronyms.join(', ') || "None"}`, true)

        message.channel.send(embed)
      }
    })
  }
  
} 

module.exports.info = {
  name: "anime",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Anime",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends an anime\'s information.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Anime)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}