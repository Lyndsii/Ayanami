const Discord = require('discord.js');
const client = new Discord.Client();
client.db = require('quick.db');
client.hastebin = require('hastebin-gen');
// client.azur = require('@azurapi/azurapi');
const { tokens } = require('./token.json')
const fs = require('fs');
const DBL = require("dblapi.js");
const dbl = new DBL(tokens.TOPGGTOKEN, client);
const DEL = require('discordextremelist.xyz');
require(__dirname + '/express.js')
/*const del = new DEL.Client(client.id, tokens.DELTOKEN);
const { ddblAPI } = require('ddblapi.js');
const ddbl = new ddblAPI('624559376660693003', 'API_KEY');
const dblHook = new DBL(tokens.TOPGGTOKEN, { webhookPort: 3001, webhookAuth: 'belfast' });
const proxy = require('express-http-proxy');
const app = require('express')();*/


client.events = new Discord.Collection();
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`LOADED: [EVENT] - ${eventName}`)
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`LOADED: [COMMAND] - ${commandName}`);
    client.commands.set(commandName, props);
  });
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

dbl.on('posted', () => {
  console.log('POSTED: [DBL] - Server count posted!');
})
 
dbl.on('error', e => {
 console.log(`Eh! ${e}`);
});

/*
del.updateCount(client.guilds.size).then((bot) => {
    console.log('POSTED: [DEL] - Server count posted!', bot);
}).catch((e) => {
    console.error(e);
});
*/
/*
ddbl.postStats(client.guilds.ache.size)
    .then(console.log('POSTED: [DDBL] - Server count posted!'));
*/

client.login(process.env.TOKEN)