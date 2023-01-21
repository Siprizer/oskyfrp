let { MessageEmbed } = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'deposit',
    aliases: ['dep'],
    cooldown: 1,
    perms: [],
    dir: 'economy',
    owner: false,
    
    run :async (client, message, args) => { 
        let demount = parseInt(args[1])
        let pursere = await db.get(`purse_${message.author.id}`)
    
    
        if (pursere >= demount) {
          if (demount) {
    
            let debank = await db.get(`bank_${message.author.id}`)
            message.reply({
              content: `You have deposited **¥${demount}** into your bank`
            })
            await db.set(`purse_${message.author.id}`, pursere - demount)
            await db.set(`bank_${message.author.id}`, debank + demount)
    
    
          } else {
            message.reply({
              content: `You need to enter an **amount** to deposit!`
            })
    
          }
        } else {
          message.reply({
            content: `You don't have that much money in your purse!`
          })
        } 
    }
}