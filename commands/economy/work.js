let { MessageEmbed } = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'work',
    aliases: ['w'],
    cooldown: 1,
    perms: [],
    dir: 'economy',
    owner: false,
    
    run :async (client, message, args) => { 
        const mwork = await db.get(`tmwork_${message.author.id}`);
    const wtimeout = 1800000;
    if (mwork !== null && wtimeout - (Date.now() - mwork) > 0) {
      const wtimeLeft = ms(wtimeout - (Date.now() - mwork))
      message.channel.send(`(**✘**) You have worked already in the past 30 minutes you have ${wtimeleft} left.`)
      await db.set(`tmwork_${message.author.id}`, Date.now())
    } else {
      let responses = [
        "cleaned your Neighbour's garage and he gave you",
        "worked as a Banker and got",
        `robbed a store and found`
      ]
      let work = responses[Math.floor(Math.random() * responses.length)]
      function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      let amt = randInt(500, 1000)
      message.reply({
        content: `You ${work} **¥${amt}**`
      })

      let bil = await db.get(`purse_${message.author.id}`)


      await db.set(`purse_${message.author.id}`, bil + amt)
    } 
    }
}