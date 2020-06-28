module.exports = async (error) => {
  let d = require('discord.js')
  let c = new d.Client();
  c.channels.get('646617679557558302').send(`Oh my!\n\`\`\`${error}\`\`\``)
}