const Discord = require("discord.js");
const fetch = require('node-fetch')
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    message.channel.send('Please provide the name of a country!~💖')
  } else {
    fetch("https://restcountries.eu/rest/v2/name/" + args.join('%20'))

    .then(res => res.json()).then(body => {
    

      if (!body) return message.reply("This command is experiencing a few issues!~💖")
  
      let b = body[0];
      
      if (body.status) {
        let e = new Discord.MessageEmbed()
        .setColor(0xffd1dc)
        .setTitle(body.status)
        .setDescription(body.message)
        message.channel.send(e)
      } else {
        let embed = new Discord.MessageEmbed()
        .setColor(0xffd1dc)
        .setThumbnail(b.flag.slice(0, -3) + 'png')
        .setTitle(`${b.name} (${b.altSpellings.join(', ')})`)
        .setURL(b.flag)
        .setDescription(`Native Name: ${b.nativeName}\nCapital: ${b.capital}\nRegion: ${b.region}\nSub-Region: ${b.subregion}\nPopulation: ${b.population}\nLatitude & Longitude: ${b.latlng.join(', ')}\nDemonym: ${b.demonym}\nArea: ${b.area}\nGini: ${b.gini}\nTimezone(s): ${b.timezones.join(', ')}\nBorders: ${b.borders.join(', ')}\nNumeric Code: ${b.numericCode}\nTop Level Domain(s): ${b.topLevelDomain.join(', ')}\nCIOC: ${b.cioc}`)
        .addField(`Codes`, `Alpha 2 Code: ${b.alpha2Code}\nAlpha 3 Code: ${b.alpha3Code}\nCalling Code(s): ${b.callingCodes.join(', ')}`, true)
        .addField(`Currency`,`Name: ${b.currencies[0].name}\nCode: ${b.currencies[0].code}\nSymbol: ${b.currencies[0].symbol}`, true)
        .addField(`Language(s)`,`Name: ${b.languages[0].name} (${b.languages[0].nativeName})\nISO 639-1: ${b.languages[0].iso639_1}\nISO 639-2: ${b.languages[0].iso639_2}`, true)
        .addField(`Translations`,`German: ${b.translations.de}\nSpanish: ${b.translations.es}\nFrench: ${b.translations.fr}\nJapanese: ${b.translations.ja}\nItalian: ${b.translations.it}\nPortuguese (Brazil): ${b.translations.br}\nPortuguese: ${b.translations.pt}`, true)
        .setFooter(`Powered by: Rest Countries API`)
        // .addField(`Regional Bloc(s)`, `Name: ${b.regionalBlocs[0].name || "None"}\nOther Name(s): ${b.regionalBlocs[0].otherNames.join(', ') || "None"}\nAcronym: ${b.regionalBlocs[0].acronym || "None"}\nOther Acronym(s): ${b.regionalBlocs[0].otherAcronyms.join(', ') || "None"}`, true)

        message.channel.send(embed)
      }
    })
  }
  
} 

module.exports.info = {
  name: "country",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a country\'s information.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Country)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}