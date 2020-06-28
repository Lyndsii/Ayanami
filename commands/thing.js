const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, config) => {
  if (!args[0]) {
    let embed = new MessageEmbed()
      .setTitle(`${client.user.username} Store!`)
      .setDescription("**Use p.store <category> to view a category!~💖**")
      .addField(`Here Are Some Kitty Categories!`,`Regular Cats[44] - *ID: Regular*\nRare Cats[22] - *ID: Rare*\nOther[1] - *ID: Other*`)
      //.addField(`<:snowball:642290101845753856>Snowball`,"`$80`\nA mellow kitty!")
      .setColor(0xffd1dc);

    message.channel.send(embed);
  } else if (args[0] == 'regular') {
    message.channel.send(new MessageEmbed()
                        .setColor(0xffd1dc)
                        .setTitle(`${client.user.username} Store!~💖`)
                        .setDescription('◈<:snowball:642290101845753856> | **Snowball** - Just a mellow kitty! [$`80`]\n◈<:smokey:642510479641673728> | **Smokey** - A kitty with a hot and cold personality! [$`140`]\n◈<:spots:642511086238826514> | **Spots** - A playful joker! [$`75`]\n◈<:shadow:642512360979955722> | **Shadow** - A peculiar cat! [$`50`]\n◈<:sunny:642513540560846858> | **Sunny** - A mischievous little kitten! [$`120`]\n◈<:fred:642516164441931777> | **Fred** - A lady-killing kitty! [$`150`]\n◈<:pumpkin:642517688605999104> | **Pumpkin** - Spacey but cute kitty! [$`90`]\n◈<:callie:642520515902308394> | **Callie** - The most carefree kitty you\'ll know! [$`50`]\n◈<:tabitha:642521472484507649> | **Tabitha** - A loveable and leisurely kitty! [$`40`]\n◈<:bandit:642522103949688853> | **Bandit** - A kitty that\'s wild at heart! [$`180`]\n◈<:gabriel:642522757065867285> | **Gabriel** - A diligent little cat! [$`150`]\n◈<:marshmallow:642523319349936130> | **Marshmallow** - An adorable and aloof kitten! [$`170`]\n◈<:socks:642524119845568532> | **Socks** - The most adventurous kitten there is! [$`70`]\n◈<:lexy:642524931082420252> | **Lexy** - A kitten with expensive tastes! [$`100`]\n◈<:bolt:642525461167210506> | **Bolt** - Quite the insatiable kitty! [$`140`]\n◈<:breezy:642525792957628426> | **Breezy** - A laid back cat! [$`30`]\n◈<:misty:642526161049616427> | **Misty** - A lazy kitty! [$`160`]\n◈<:pickles:642526764341395456> | **Pickles** - A surprisingly faint-hearted kitten! [$`0`]\n◈<:pepper:642527162448085002> | **Pepper** - A shy kitty! [$`165`]\n◈<:patches:642527445416673281> | **Patches** - A jealous little furball! [$`80`]\n◈<:gozer:642527774527062016> | **Gozer** - A kitten with the heart of a sore-loser! [$`155`]\n◈<:cocoa:642528461604388864> | **Cocoa** - A indecisive cat! [$`45`]\n◈<:princess:642528958176428082> | **Princess** - A young, ditzy kitty! [$`125`]\n◈<:ginger:642535530948591628> | **Ginger** - A bashful cat! [$`60`]')
                         //◈emoji | **name** - personality [$`price`]\n
                        )
    await message.channel.send(new MessageEmbed()
                        .setColor(0xffd1dc)
                        //.setTitle(`${client.user.username} Store!`)
                        .setDescription('◈<:peaches:642537620143865861> | **Peaches** - A capricious cat! [$`45`]\n◈<:spud:642538257850171423> | **Spud** - A cautious kitty! [$`80`]\n◈<:mack:642538642773901312> | **Mack** - The most determined a kitty can get! [$`130`]\n◈<:speckles:642539013689049088> | **Speckles** - A small and lonely kitten! [$`40`]\n◈<:willie:642540065763098624> | **Willie** - A crafty kitty! [$`75`]\n◈<:rascal:642540401416339476> | **Rascal** - A selfish little cat! [$`140`]\n◈<:dottie:642542626620571659> | **Dottie** - A friendly kitty! [$`195`]\n◈<:spooky:642543348544176146> | **Spooky** - A small little reserved kitten! [$`35`]\n◈<:apricot:642543778963652677> | **Apricot** - A slacker cat! [$`10`]\n◈<:ganache:642544199312605186> | **Ganache** - A pragmatic little kitty! [$`90`]\n◈<:pasty:642544569711329283> | **Pasty** - An innocent little kitten! [$`45`]\n◈<:chip:642545257833299984> | **Chip** - A cat with the personality of a young master! [$`60`]\n◈<:macchiato:642547708535504906> | **Macchiato** - A sweet sourpuss! [$`115`]\n◈<:melange:642549309241294869> | **Melange** - A calm kitty! [$`15`]\n◈<:chocola:642549660518711314> | **Chocola** - A forgetful little kitten! [$`155`]\n◈<:willow:642550201466355713> | **Willow** - A guileless cat! [$`80`]\n◈<:sooty:642550514122489866> | **Sooty** - A whimsical little kitten! [$`65`]\n◈<:quicksilver:642550832587603969> | **Quicksilver** - A kitty known for mooching! [$`105`]\n◈<:maple:642551791308898319> | **Maple** - A moody cat! [$`99`]\n◈<:caramel:642552234663608348> | **Caramel** - A tomboy kitty! [$`205`]')                              )
  } else if (args[0] == 'rare') {
    message.channel.send(new MessageEmbed()
                        .setColor(0xffd1dc)
                        .setTitle(`${client.user.username} Store!~💖`)
                        .setDescription('◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n◈emoji | **name** - personality [$`price`]\n')
                         //◈emoji | **name** - personality [$`price`]\n
                        )
  } else if (args[0] == 'other') {
    message.channel.send(new MessageEmbed()
                        .setColor(0xffd1dc)
                        .setTitle(`${client.user.username} Store!~💖`)
                        .setDescription('◈emoji | **name** - personality [$`price`]')
                        )
  } else {
    message.channel.send(`That's not a category!~💖`)
  }
};

module.exports.info = {
  name: "thing",
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Economy",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Displays the items in the store',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}