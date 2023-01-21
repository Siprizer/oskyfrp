let { MessageEmbed } = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'take',
    aliases: ['t'],
    cooldown: 1,
    perms: [],
    dir: 'owner',
    owner: true,
    
    run :async (client, message, args) => {  
        
      let usrr = message.mentions.users.first()

      let amou = parseInt(args[2])
      if (usrr) {
        if (amou) {


          let playerBal = await db.get(`purse_${usrr.id}`)
          message.channel.send({ content: `You have taken away **¥${amou}** from ${usrr}` })

          await db.set(`purse_${usrr.id}`, playerBal - amou)









        } else {
          message.reply({
            content: `You didn't mention an **amount** to take!`
          })
        }
      } else {
        message.reply({
          content: `You didn't mention a **user** to take from!`
        })
      }
    }
}