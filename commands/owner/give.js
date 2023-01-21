let { MessageEmbed } = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'give',
    aliases: ['g'],
    cooldown: 1,
    perms: [],
    dir: 'owner',
    owner: true,
    
    run :async (client, message, args) => { 
        let us = message.mentions.users.first()

        let am = parseInt(args[2])
        if (us) {
          if (am) {
  
  
            let itbal = await db.get(`purse_${us.id}`)
            message.channel.send({ content: `You sent **¥${am}** to ${us}` })
  
            await db.set(`purse_${us.id}`, itbal + am)
  
  
  
  
  
  
  
  
  
          } else {
            message.reply({
              content: `You didn't mention an **amount** to send!`
            })
          }
        } else {
          message.reply({
            content: `You didn't mention a **user** to send to!`
          })
        } 
    }
}