const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  let economyCommands = [
    'balance',
    'daily',
    'monthly',
    'pay',
    'rob',
    'weekly',
    'work',
    //'store',
    //'buy',
    //'pet'
  ]
  let moderationCommands = [
    'kick',
    'ban',
    'purge'
  ]
  let configCommands = [
    'log-channel'
  ]
  let utilityCommands = [
    'botinfo',
    'profile',
    'avatar',
    'bug',
    'colour',
    'shorten',
    'wordcount',
    'invite',
    'setbio',
    'steamuser',
    'country',
    'newsletter'
  ]
  let animeCommands = [
    'hug',
    'smug',
    'baka',
    'tickle',
    'slap',
    'poke',
    'pat',
    'nekogif',
    'kiss',
    'foxgirl',
    'feed',
    'cuddle',
    'holo',
    'kemonomimi',
    'neko',
    'anime',
    'azurlane'
  ]
  let animalsCommands = [
    'cat',
    'lizard',
    'dog',
    'fox',
    'alpaca',
    'seal',
    'llama',
    'sadcat',
    'bird',
    'bunny',
    'shiba'
  ]
  let textCommands = [
    'owo',
    'aesthetic'
  ]
  let funCommands = [
    'meme',
    'randomfact',
    'rps',
    'joke',
    'chat',
    'affinity',
    'scrollmeme',
    'salty',
    'achievementget',
    'amiajoke',
    'bad',
    'calling',
    'captchameme',
    'challengecomplete',
    'colourify',
    'didyoumean',
    'drakememe',
    'factmeme',
    'coffee',
    'floormeme',
    'fml',
    'wooosh',
    'phlogo',
    'supreme'
  ]
  let tagCommands = [
    'addtag',
    'tag',
    'taginfo',
    'edittag',
    'removetag',
    'randomtag'
  ]
  let marriageCommands = [
    /*'marry',
    'showproposals',
    'declinemarriage',
    'acceptmarriage',
    'divorce'*/
  ]
  let nsfwCommands = [
    'urban',
    'lewdneko',
    'lewdholo',
    'lewdkemonomimi',
    'lewdkitsune',
    'lewdavatar'
  ]
  let premiumCommands = [
    'premium',
    'redeem'
  ]
  let ownerCommands = [
    'add-money',
    'remove-money',
    'eval',
    'reload',
    'blacklist',
    'unblacklist',
    'premium-add',
    'premium-remove',
    'newredeem',
    'publish'
  ]
  let totalCommands = economyCommands.length + moderationCommands.length + configCommands.length + utilityCommands.length + animeCommands.length + animalsCommands.length + textCommands.length + funCommands.length + tagCommands.length + marriageCommands.length + nsfwCommands.length + premiumCommands.length + ownerCommands.length
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle(`Here are my commands!\nTotal Commands: ${totalCommands}`)
                      .setColor(0xffd1dc)
                      .setDescription('Remember, my prefix is `' + process.env.PREFIX + '`!~💖')
                      .addField(`Economy[${economyCommands.length}]`,'`' + economyCommands.join('`|`') + '`')
                      .addField(`Utility[${utilityCommands.length}]`,'`' + utilityCommands.join('`|`') + '`')
                      .addField(`Moderation[${moderationCommands.length}]`,'`' + moderationCommands.join('`|`') + '`')
                      .addField(`Config[${configCommands.length}]`,'`' + configCommands.join('`|`') + '`')
                      .addField(`Anime[${animeCommands.length}]`,'`' + animeCommands.join('`|`') + '`')
                      .addField(`Animals[${animalsCommands.length}]`,'`' + animalsCommands.join('`|`') + '`')
                      .addField(`Text[${textCommands.length}]`,'`' + textCommands.join('`|`') + '`')
                      .addField(`Fun[${funCommands.length}]`,'`' + funCommands.join('`|`') + '`')
                      .addField(`Tag[${tagCommands.length}]`,'`' + tagCommands.join('`|`') + '`')
                      // .addField(`Marriage[${marriageCommands.length}]`,'`' + marriageCommands.join('`|`') + '`')
                      .addField(`NSFW[${nsfwCommands.length}]`,'`' + nsfwCommands.join('`|`') + '`')
                      .addField(`Premium[${premiumCommands.length}]`,'`' + premiumCommands.join('`|`') + '`')
                      .addField(`Owner[${ownerCommands.length}]`,'`' + ownerCommands.join('`|`') + '`')
                      .addField(`\u200b`,`[Support Server](https://discord.gg/KbgqE6K) | [Invite Link](https://discordapp.com/oauth2/authorize?client_id=624559376660693003&scope=bot&permissions=1026944086)`)
                      )
}

module.exports.info = {
  name: "help",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Utility",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Sends a message of all the commands',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '<Command>',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}