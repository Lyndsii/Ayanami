module.exports.run = async (client, message, args) => {
  let { MessageEmbed } = require('discord.js');
  let fetch = require('node-fetch');
  fetch('https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json').then(res => {
    // if (isNaN(args[0])) return message.channel.send('Please provide a valid ID!~💖');
    // if ("IDK LMAO") return message.channel.send('Please provide a valid ID!~💖');
    if (!res.ok) return message.channel.send('Please provide a valid ID!~💖');
    res.json().then(b => { //b[args[0]].wikiUrl 
      if (!b) return message.channel.send('Please provide a valid ID!~💖');
      if (!b[args[0]]) return message.channel.send('Please provide a valid ID!~💖');
      let a = b[args[0]];
      let stats = a.stats["Stat type"];
      message.channel.send(new MessageEmbed()
                           .setColor(0xffd1dc)
                           .setTitle(a.names.en)
                           .setURL(a.wikiUrl)
                           .setThumbnail(a.thumbnail)
                           .addField(`ID`, a.id, true)
                           .addField(`Stars`, `${a.stars.stars}`, true)
                           .addField(`Class`, a.class, true)
                           .addField(`Nationality`, a.nationality, true)
                           .addField(`Type`, a.hullType, true)
                           .addField(`Build Time`, a.buildTime, true)
                           .addField(`Rarity`, a.rarity, true)
                           // .addBlankField()
                           .addField(`\u200b`, `**Artist**`)
                           .addField(`Name`, `${a.misc.artist}/${a.misc.twitter || "No Twitter Username"}`, true)
                           .addField(`Website`, `[${a.misc.web.name}](${a.misc.web.url})`, true)
                           .addField(`Pixiv`, `[${a.misc.pixiv.name}](${a.misc.pixiv.url})`, true)
                           // .addBlankField()
                           .addField(`\u200b`, `**Voice Actor**`)
                           .addField(`Name`, a.misc.voice, true)
                           // .addBlankField()
                           // .addField(`\u200b`, `**Stats**`)
                           // .addField(`Health`, a.stats["Stat type"].health, true)
                           // .addField(`Armor`, a.stats["Stat type"].armor, true)
                           // .addField(`Reload`, a.stats["Stat type"].reload, true)
                           // .addField(`Luck`, a.stats["Stat type"].luck, true)
                           // .addField(`Firepower`, a.stats["Stat type"].firepower, true)
                           // .addField(`Torpedo`, a.stats["Stat type"].torpedo, true)
                           // .addField(`Evasion`, a.stats["Stat type"].evasion, true)
                           // .addField(`Speed`, a.stats["Stat type"].speed, true)
                           // .addField(`Anti-Air`, stats["Anti-air"], true)
                           // .addField(`Aviation`, a.stats["Stat type"].aviation, true)
                           // .addField(`Oil Consumption`, stats["Oil consumption"], true)
                           // .addField(`Accuracy (Hit)`, stats["Accuracy (Hit)"], true)
                           // .addField(`Anti-Submarine Warfare`, stats["Anti-submarine warfare"], true)
                           // .addBlankField()
                           .addField(`\u200b`, `**Skin**`)
                           .addField(`Name`,`[${a.skins[0].name}](${a.skins[0].image})`, true)
                           .setImage(a.skins[0].image)
                          )
    })
  })
}

module.exports.info = {
  name: 'azurlane',
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: 'Anime',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Search for a Azur Lane ship.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Ship ID)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}