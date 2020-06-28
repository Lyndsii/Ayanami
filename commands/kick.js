module.exports.run = async(client, message, args) => {
   const user = message.mentions.users.first();
   //let userLength = user.length
   //let wholeLength = args.join(' ').length
   const reasonFor = args.join(' ').slice(22) || 'None'
    // If we have a user mentioned
   if (message.member.hasPermission('KICK_MEMBERS')) {
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick({reason: reasonFor}).then(() => {
            // We let the message author know we were able to kick the person
          message.channel.send(`Successfully kicked ${user.tag}!~💖`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to kick the member!~💖');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.channel.send('That user isn\'t in this guild!~💖');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.channel.send('You didn\'t mention anybody to kick!~💖');
      }
   } else {
     message.channel.send('You don\'t have the permissions to do this!~💖')
   }
}

module.exports.info = {
  name: "kick",
  argsNeeded: false,
  userNeeded: true,
  userOptional: false,
  ownerOnly: false,
  category: "Moderation",
  guildOnly: true,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Kicks a mentioned user.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '(User & Reason)',
  administratorOnly: false,
  moderatorOnly: true,
  hidden: false
}