module.exports.run = async (client, message, args) => {
  let db = client.db;
  let set1 = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let set2 = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let set3 = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let set4 = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];
  let set5 = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];
  let aset1 = set1[Math.floor(Math.random() * set1.length)];
  let aset2 = set2[Math.floor(Math.random() * set2.length)];
  let aset3 = set3[Math.floor(Math.random() * set3.length)];
  let aset4 = set4[Math.floor(Math.random() * set4.length)];
  let aset5 = set5[Math.floor(Math.random() * set5.length)];
  let redeemCodeBeta = `${aset1}${aset2}${aset3}${aset4}${aset5}`;
  let redeemCode = redeemCodeBeta.toUpperCase()
  function shuffle(strng) {
  var spl = strng.split("");
  var num = [];
  var x = 0;
  while (x != strng.length) {
    num.push(x);
    x = x + 1;
  }
  var ret = [];
  b = 0;
  while (b != strng.length) {
    var ran = Math.floor(Math.random() * strng.length);
    if (num.join("").includes(ran)) {
      ret.push(strng[ran]);
      num[ran] = null;
      b = b + 1;
    }
  }
  return ret.join("");
}
  var b = shuffle(redeemCode);
  // console.log(b)
  message.channel.send('Made a new redeem code: `' + b + '`')
  db.set(`codes`, b)
}

module.exports.info = {
  name: 'newredeem',
  argsNeeded: false,
  userNeeded: false,
  userOptional: false,
  ownerOnly: true,
  category: 'Owner',
  guildOnly: false,
  premiumOnly: false,
  voterOnly: false,
  nsfw: false,
  description: 'Creates a premium code.',
  disabledGlobal: false,
  disabledGuild: false,
  usage: '',
  administratorOnly: false,
  moderatorOnly: false,
  hidden: false
}