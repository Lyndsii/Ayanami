module.exports.run = async (client, message, args) => {
  let db = client.db;
  let tags = db.fetch(`tags`)
  let tagNames = Object.keys(tags)
  let chosenName = args[0];
  // let tagList = db.fetch(`tagList`)
//   for(let i = 0; i < tagNames.length; i++){

//         db.push(`tagList`, tagNames[i])//orange \n apple

//       }
  if (!args[0]) {
    message.channel.send('What tag would you like to add?~💖')
  } else if (tagNames.includes(chosenName)) {
    message.channel.send('That tag already exists, shikikan!~💖')
  } else if (!args[1]) {
    if(message.attachments.size = 0) return message.channel.send('You need to add a description to your tag!~💖');
  } else {
    db.set(`tags.${chosenName}`, { 'description':`${args.slice(1).join(' ')}`, 'author':`${message.author.id}`, usage: 0 })
    message.channel.send('I\'ve made the tag, shikikan!~💖')
  }
}

module.exports.info = {
  name: "addtag",
  argsNeeded: true,
  userNeeded: false,
  userOptional: false,
  ownerOnly: false,
  category: "Tag",
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Creates a tag.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(Tag Name) (Tag Description)',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}