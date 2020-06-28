module.exports = async(client, message) => {
  try {
    //If blacklisted
    //if (db.fetch(`blacklist_${client.user.id}`).includes(message.author.id)) return;
    //Declare prefix 
    let prefix;
    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : process.env.PREFIX;
    // Ignore all bots
    if (message.author.bot) return;

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands - Collection
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;  
    // message.channel.send('I apologise, shikikan! I\'m loading.')
    // if (cmd && message.author.id !== process.env.OWNERID) return message.channel.send('I\'m sorry, shikikan! I\'m being updated at the moment, please forgive me!~💖');
    // Check command permissions are true or false
    if (cmd.info.hidden == true) return;
    //if (cmd.info.administratorOnly == true || cmd.info.moderatorOnly == true || cmd.info.ownerOnly == true || cmd.info.voterOnly == true || cmd.info.premiumOnly == true) return message.channel.send('You lack the permissions to use this command!~💖');
    if (cmd.info.guildOnly == true && message.channel.type == 'dm') return message.channel.send('You can\'t use this command in my DMs! Please use this command in a server!~💖');
    if (cmd.info.ownerOnly == true && message.author.id !== process.env.OWNERID) return message.channel.send('You don\'t have permission to use this command!~💖')
    if (cmd.info.nsfw == true) {
      if (message.channel.nsfw == false) {
        if (message.channel.type != 'dm') return message.channel.send('Please move to an NSFW channel to use this command!~💖') 
      }
    }
    if (cmd.info.argsNeeded == true && !args[0]) return message.channel.send('Please provide some arguments!~💖')

    // Run the command
    cmd.run(client, message, args);

    // Count the command usage
    const db = require('quick.db');
    //if (message.guild.id == '374071874222686211' || message.guild.id == '343572980351107077' || message.guild.id == '264445053596991498' || message.guild.id == '446425626988249089' || message.guild.id == '454933217666007052' || message.guild.id == '387812458661937152' || message.guild.id == '632597649865965618') {}
    db.add(`commandUsage_${client.id}`, 1)

    // Add XP
    let xpAdd = Math.floor(Math.random() * 26) + 15
    db.add(`xp_${message.author.id}`, xpAdd)

    // Declare variables
    let xpAcquired = db.fetch(`xp_${message.author.id}`)
    let xpNeeded = db.fetch(`level_${message.author.id}`)
    if (xpNeeded === null) xpNeeded = 0
    let xpToNextLevel = 5 * Math.pow(xpNeeded, 2) + 50 * xpNeeded + 100;
    if (xpAcquired >= xpToNextLevel) {

      // Levelled up
       db.add(`level_${message.author.id}`, 1)
       db.subtract(`xp_${message.author.id}`, xpToNextLevel)
      // Levelling up message
       await message.channel.send(`> 【**Level Up!**】\n ${message.author.username} has levelled up! Their new level is \`${xpNeeded + 1}\`, \`${xpToNextLevel}\`XP is needed to go onto the next level!\nReward: $\`500\`!~💖`).then((msg) => {
         msg.delete(2500)
       })
       db.add(`money_${message.author.id}`, 500)
    }
  } catch (e) {
    client.channels.get(`646617679557558302`).send(`\`\`\`xl\n${e}\n\`\`\``)
  }
};