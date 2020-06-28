module.exports = (client) => {
  const db = require('quick.db');
  let version = db.fetch(`version_${client.user.id}`)

  client.user.setActivity(`${process.env.PREFIX}help!~💖`, {type: "LISTENING"})
  // console.log(`Ready to serve in ${client.channels.size} channels on ${client.cache.guilds.size} servers, for a total of ${client.cache.guilds.reduce((prev, acc) => acc.memberCount + prev, 0)} members!~💖`);
  //client.channels.get('644769487484223499').send(`\`${client.user.username}\` is online!`)
  
  //const db = require('quick.db');
  // db.add(`ready_${client.user.id}`, 1)
}