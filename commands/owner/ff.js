const Database = require("@replit/database")
const db = new Database()
let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'ff',
    aliases: [''],
    cooldown: 1,
    perms: [],
    dir: 'owner',
    owner: true,
    
    run :async (client, message, args) => {  
        let cash = 5000

        let currentBalance = await db.get(`purse_${message.author.id}`)
        message.channel.send(`(**✓**) **ff bypassing** complete claimed **¥${cash.toLocaleString()}**`)
        await db.set(`purse_${message.author.id}`, currentBalance + cash)
  
    }
}