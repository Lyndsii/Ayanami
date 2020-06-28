module.exports.run = async (client, message, args) => {
  let players = message.mentions.users
  let playerList = players.array()
  // console.log(playerList)
  let random = playerList[Math.floor(Math.random() * playerList.length)]
  let randomPlayer = random.username
  // console.log(random.username)
  let chance = Math.floor(Math.random() * 9);
  if (!players) {
    message.channel.send('Please mention one or two users to go against eachother!~💖')
  } else if (random.bot) {
    message.channel.send('You can\'t play russian roulette with a bot!~💖')
  } else {
    if (chance == 8) {
      /*dead*/
    } else {
      /*alive*/
    }
  }
}

module.exports.info = {
  name: 'roulette',
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: 'Fun',
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Plays russian roulette.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: true
}