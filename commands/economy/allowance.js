const Database = require("@replit/database")
const db = new Database()
let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'allowance',
    aliases: ['all'],
    cooldown: 1,
    perms: [],
    dir: 'economy',
    owner: false,
    
    run :async (client, message, args) => {  
        const check = await db.get(`hourlyCheck_${message.author.id}`);
        const timeout = 900000;
        if (check !== null && timeout - (Date.now() - check) > 0) {
          const ms = require("pretty-ms")
          const timeLeft = ms(timeout - (Date.now() - check))
          const allowanembed = new MessageEmbed()
    .setTitle(``)
     .setDescription(`You have claimed your allowance already, you have **${timeLeft}** left`)
    .setColor(`RED`)
    message.reply({ embeds: [allowanembed] })
    
        } else {
          let reward = 1250;
          let currentBalance = await db.get(`purse_${message.author.id}`)
                const allowanaccembed = new MessageEmbed()
    .setTitle(`Successful`)
     .setDescription(`You've claimed **${reward.toLocaleString()}**\n\nYou are able to do !allowance in 15 minutes`)
    .setColor(`GREEN`)
    message.reply({ embeds: [allowanaccembed] })
          await db.set(`purse_${message.author.id}`, currentBalance + reward)
          await db.set(`hourlyCheck_${message.author.id}`, Date.now())
        }

    }
}
