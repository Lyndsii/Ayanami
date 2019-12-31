The full list of commands.

Table of Contents
=================
* [Usage](#Usage)
* [Categories](#Categories)
  * [Economy](#Economy)
  * [Utility](#Utility)
  * [Moderation](#Moderation)
  * [Config](#Config)
  * [Anime](#Anime)
  * [Animals](#Animals)
  * [Text](#Text)
  * [Fun](#Fun)
  * [Tag](#Tag)
  * [Marriage](#Marriage)
  * [NSFW](#NSFW)
  * [Premium](#Premium)
  * [Owner](#Owner)
 
 
# Usage

Ayanami's default (and only) prefixes are `aya.` and `@Ayanami`. Here's an example of how you could use these prefixes:

```
aya.help

(Brings up a list of commands in discord)

@Ayanami help

(Brings up a list of commands in discord)
```
Easy enough, right? Some commands require things called `arguments` (or `args` for short). For example, Ayanami's `addtag` command requires you to also input a title and description within the same message.
```
aya.addtag Title Description Here

(Tag title will be the first arg: `Title`, Tag description will be the rest of the message (excluding the command name and prefix): `Description Here`)
```
Got that? Great! Now you're ready to use Ayanami's commands! Don't worry if you forget, Ayanami will remind you.

# Categories

* [Economy](#Economy)
* [Utility](#Utility)
* [Moderation](#Moderation)
* [Config](#Config)
* [Anime](#Anime)
* [Animals](#Animals)
* [Text](#Text)
* [Fun](#Fun)
* [Tag](#Tag)
* [Marriage](#Marriage)
* [NSFW](#NSFW)
* [Premium](#Premium)
* [Owner](#Owner)

## Economy

Economy commands are basically commands that give you online money! Sadly, it's not *real* money, but who cares?

### `balance`

Displays your/someone else's bank balance.
* `{prefix}balance`
* `{prefix}balance @{user}`

### `daily`

Provides you with your daily rewards.
* `{prefix}daily`

### `monthly`

Provides you with your monthly rewards.
* `{prefix}monthly`

### `pay`

Gives a mentioned user some money.
* `{prefix}pay @{user}`

### `rob`

Robs a mentioned user of their money.
* `{prefix}rob @{user}`

### `weekly`

Provides you with your weekly rewards.
* `{prefix}weekly`

### `work`

Makes you work at a certain job.
* `{prefix}work {job}`

## Utility

Somewhat practical commands that could actually benefit you!

### `botinfo`

Provides information about Ayanami
* `{prefix}botinfo`

### `profile`

Provides your/someone else's profile.
* `{prefix}profile`
* `{prefix}profile {user}`

### `avatar`

Provides your/someone else's avatar.
* `{prefix}avatar`
* `{prefix}avatar {user}`

### `bug`

Sends a bug report about any bugs that Ayanami may have.
* `{prefix}bug {bug report}`

### `colour`

Sends information about a random/specified colour.
* `{prefix}colour`
* `{prefix}colour {hex code}`

### `shorten`

Sends the shortened version of a specified link.
* `{prefix}shorten {link}`
* `{prefix}shorten {link} {title}`

### `wordcount`

Counts the amount of words in a specified sentence.
* `{prefix}wordcount {sentence}`

### `invite`

Sends the invite link for Ayanami.
* `{prefix}invite`

### `setbio`

Sets your bio.
* `{prefix}setbio {bio}`

### `steamuser`

Sends information about a steam user.
* `{prefix}steamuser {steam ID}`

### `country`

Sends information about a country.
* `{prefix}country {country name}`

### `newsletter`

Checks the bot newsletter.
* `{prefix}newsletter`

## Moderation

Discipline misbehaving users or just clean the server of undesired members/texts!

### `kick`

Kicks a mentioned user.
* `{prefix}kick @{user}`
* `{prefix}kick @{user} {reason}`

### `ban`

Bans a mentioned user.
* `{prefix}ban @{user}`
* `{prefix}ban @{user} {reason}`

### `purge`

Purges a specified amount of messages.
* `{prefix}purge {amount}`

## Config

Set-up certain aspects of the bot to suit your needs and desires!

### `log-channel`

Sets the channel for Ayanami to send logs to.
* `{prefix}log-channel #{channel}`

## Anime

Some commands to satisfy the weebs of your discord server! (Includes action commands)

### `hug`

Hugs a mentioned user.
* `{prefix}hug {user}`

### `smug`

Makes you seem smug.
* `{prefix}smug`

### `baka`

Makes you call people a baka.
* `{prefix}baka`

### `tickle`

Tickles a mentioned user.
* `{prefix}tickle {user}`

### `slap`

Slaps a mentioned user.
* `{prefix}slap {user}`

### `poke`

Pokes a mentioned user.
* `{prefix}poke {user}`

### `pat`

Pats a mentioned user.
* `{prefix}pat {user}`

### `nekogif`

Sends a GIF of a neko-girl.
* `{prefix}nekogif`

### `kiss`

Kisses a mentioned user.
* `{prefix}kiss {user}`

### `foxgirl`

Sends an image of a foxgirl.
* `{prefix}foxgirl`

### `feed`

Feeds a mentioned user.
* `{prefix}feed {user}`

### `cuddle`

Cuddles a mentioned user.
* `{prefix}cuddle {user}`

### `holo`

Sends an image of holo.
* `{prefix}holo`

### `kemonomimi`

Sends an image of a kemonomimi.
* `{prefix}kemonomimi`

### `neko`

Sends an image of a neko-girl.
* `{prefix}neko`

### `anime`

Sends information about a specified anime
* `{prefix}anime {anime}`

### `azurlane`

Sends information about a specified Azur Lane ship.
* `{prefix}azurlane {ship ID}`


## Animals

Sends randomised images of cute animals!

### `cat`

Sends an image of a cat.
* `{prefix}cat`

### `lizard`

Sends an image of a lizard.
* `{prefix}lizard`

### `dog`

Sends an image of a dog.
* `{prefix}dog`

### `fox`

Sends an image of a fox.
* `{prefix}fox`

### `alpaca`

Sends an image of an alpaca.
* `{prefix}alpaca`

### `seal`

Sends an image of a seal.
* `{prefix}seal`

### `llama`

Sends an image of a llama.
* `{prefix}llama`

### `sadcat`

Sends an image of a sad cat.
* `{prefix}sadcat`

### `bird`

Sends an image of a bird.
* `{prefix}bird`

## Text

Modifies a specified sentence/text!

### `owo`

Sends an OWOified version of a specified sentence.
* `{prefix}owo {text}`

## Fun

Basically commands that don't fit any other categories and are there for the sole reason of entertainment!

### `meme`

Sends a random Reddit meme.
* `{prefix}meme`

### `randomfact`

Sends a random fact.
* `{prefix}randomfact`

### `rps`

Play rock paper scissors against the bot
* `{prefix}rps {rock|paper|scissors}`

### `joke`

Sends a random joke.
* `{prefix}joke`

### `chat`

Chat with an AI.
* `{prefix}chat {message}`

### `affinity`

Check the affinity level between yourself and another user/a user and a different one.
* `{prefix}affinity @{user}`
* `{prefix}affinity @{user} @{user}`

### `scrollmeme`

Creates a scroll meme with the specified text.
* `{prefix}scrollmeme {text}`

### `salty`

Makes yourself/someone extra *salty*.
* `{prefix}salty`
* `{prefix}salty @{user}`

### `achievementget`

Creates an achievement with the specified text.
* `{prefix}achievementget {text}`

### `amiajoke`

Creates an "Am I A Joke?" meme to ask someone if you are/someone else is a joke.
* `{prefix}amiajoke`
* `{prefix}amiajoke @{user}`

### `bad`

Makes yourself/someone in trouble for being bad.
* `{prefix}bad`
* `{prefix}bad @{user}`

### `calling`

Creates a calling meme with the specified text.
* `{prefix}calling {text}`

### `captchameme`

Creates a captcha meme with the specified text.
* `{prefix}captchameme {text}`

### `challengecomplete`

Creates a challenge meme with the specified text.
* `{prefix}challengecomplete {text}`

### `colourify`

Colours your/someone's avatar with blue and white colours.
* `{prefix}colourify`
* `{prefix}colourify @{user}`

### `didyoumean`

Creates a "Did You Mean..." meme with the specified top and bottom text. (Tip: Space required)
* `{prefix}didyoumean top: {text} bottom: {text}`

### `drakememe`

Creates a Drake meme with the specified top and bottom text. (Tip: Space required)
* `{prefix}drakememe top: {text} bottom: {text}`

### `factmeme`

Creates a fact meme that makes anything you say a fact.
* `{prefix}factmeme {text}`

### `coffee`

Sends a random image of coffee.
* `{prefix}coffee`

### `floormeme`

Creates a "The FLoor Is..." meme with the specified text.
* `{prefix}floormeme {text}`

### `fml`

Sends a random **F**rick **M**y **L**ife story.
* `{prefix}fml`

### `wooosh`

Sends an image of a joke going over your/someone else's head
* `{prefix}wooosh`
* `{prefix}wooosh @{user}`

### `pblogo`
### `supreme`

## Tag
Basically copypastas, but with a nicer name!

### `addtag`

Creates a tag with the specified title and description.
* `{prefix}addtag {title (one word)} {description}`

### `tag`

Tags a created tag.
* `{prefix}tag {title}`

### `taginfo`

Sends information about a specified tag.
* `{prefix}taginfo {title}`

### `edittag`

Edits a specified tag that you have created.
* `{prefix}edittag {title} {new description}`

### `removetag`

Removes a specified tag that you have created.
* `{prefix}removetag {title}`

### `randomtag`

Sends a random tag.
* `{prefix}randomtag`

## Marriage

Simulates the joys of being married to a person!

### `marry`

Proposes to a specified user.
* `{prefix}marry @{user}`

### `showproposals`

Shows a list of the people that have proposed to you.
* `{prefix}showproposals`

### `declinemarriage`

Declines a proposal a specified user has made to you.
* `{prefix}declinemarriage @{user}`

### `acceptmarriage`

Accepts a proposal a specified user has made to you.
* `{prefix}acceptmarriage @{user}`

### `divorce`

Divorces a specified user that you are married to
* `{prefix}divorce @{user}`

## NSFW

Sends images/texts that are **N**ot **S**afe **F**or **W**ork (often times includes sexual things).

### `urban`

Searches a provided sentence on the urban dictionary.
* `{prefix}urban {text}`

### `lewdneko`

Sends a randomised, lewd image of a neko-girl.
* `{prefix}lewdneko`

### `lewdholo`

Sends a randomised, lewd image of holo.
* `{prefix}lewdholo`

### `lewdkemonomimi`

Sends a randomised, lewd image of a kemonomimi.
* `{prefix}lewdkemonomimi`

### `lewdkitsune`

Sends a randomised, lewd image of a kitsune.
* `{prefix}lewdkitsune`

### `lewdavatar`

Sends a randomised, lewd image of an avatar.
* `{prefix}lewdavatar`

## Premium

Premium gives you special perks that make your experience with Ayanami a helluva lot more interesting!

### `premium`

Sends a list of the users with premium.
* `{prefix}premium`

### `redeem`

Redeems a specified code that gives you premium.
* `{prefix}redeem {code}`

## Owner

Commands that only I can use to make sure that Ayanami functions as she should!

### `add-money`

Adds a specified amount of money to a specified user.
* `{prefix}add-money {amount} @{user}`

### `remove-money`

Removes a specified amount of money from a specified user.
* `{prefix}remove-money {amount} @{user}`

### `eval`

Evaluates the given JS code.
* `{prefix}eval {code}`

### `reload`

Reloads a specified command.
* `{prefix}reload {command}`

### `blacklist`

Blacklists a specified user.
* `{prefix}blacklist {user ID}`

### `unblacklist`

Unblacklists a specified user.
* `{prefix}unblacklist {user ID}`

### `premium-add`

Adds a specified user as a premium one.
* `{prefix}premium-add {user ID}`

### `premium-remove`

Removes a specified user from being a premium one.
* `{prefix}premium-remove {user ID}`

### `newredeem`

Creates a new redeem code for premium.
* `{prefix}newredeem`

### `publish`

Publishes an article to the bot newsletter.
* `{prefix}publish {content}`
