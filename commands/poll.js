module.exports.run = async (client, message, args) => {
  let { MessageEmbed } = require('discord.js')
  if (!args[0]) {
    message.channel.send(new MessageEmbed()
                         .setColor(0xffd1dc)
                         .setTitle('Poll Usage!~💖')
                         .addField(`Multiple Answers`, `${process.env.PREFIX}${this.info.name} "What's your favourite ship-girl?" "Ayanami" "Rodney" "Yamashiro"`, true)
                         .addField(`Yes / No`,`${process.env.PREFIX}${this.info.name} "Is Laffey's retrofit outfit better than her original one?"`)
                        )
  } else if (!message.content.includes('"')) {
    message.channel.send(new MessageEmbed()
                         .setColor(0xffd1dc)
                         .setTitle('Poll Usage!~💖')
                         .addField(`Multiple Answers`, `${process.env.PREFIX}${this.info.name} "What's your favourite ship-girl?" "Ayanami" "Rodney" "Yamashiro"`, true)
                         .addField(`Yes / No`,`${process.env.PREFIX}${this.info.name} "Is Laffey's retrofit outfit better than her original one?"`)
                        )
  } else {
    let whole = args.join(' ').split(/"/);
    let q = whole.shift();
    let a = whole.splice(1)
    let a1 = a[0]; let a2 = a[1]; let a3 = a[2]; let a4 = a[3]; let a5 = a[4]; let a6 = a[5]; let a7 = a[6]; let a8 = a[7]; let a9 = a[8]; let a10 = a[9]
    
    //🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿
    let e = {
      a1: '🇦',
      a2: '🇧',
      a3: '🇨',
      a4: '🇩',
      a5: '🇪',
      a6: '🇫',
      a7: '🇬',
      a8: '🇭',
      a9: '🇮',
      a10: '🇯',
    }
    if (!a) {
      message.channel.send(new MessageEmbed()
                           .setColor(0xffd1dc)
                           .setTitle(`📊 ${q}`)
                          ).then((m) => {
        m.react('✔️')
        m.react('❌')
      })
    } else {
      message.channel.send(new MessageEmbed()
                           .setColor(0xffd1dc)
                           .setTitle(`📊 ${q}`)
                           .setDescription(`${e[a].join('\n')}`)
                          ).then((m) => {
        var arrayLength = a.length;
        for (var i = 0; i < arrayLength; i++) {
            m.react(a[i]);
            //Do something
        } 
      })
      
    }
  }
}

module.exports.info = {
  name: 'poll',
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: 'Utility',
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Makes a simple poll.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '"(Question)" "<Choice A>" "<Choice B>" "<ETC>"',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}