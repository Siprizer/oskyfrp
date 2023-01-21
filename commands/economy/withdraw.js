let { MessageEmbed } = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'withdraw',
    aliases: ['with','w'],
    cooldown: 1,
    perms: [],
    dir: 'economy',
    owner: false,
    
    run :async (client, message, args) => {  
        let withdraw = parseInt(args[1])
        let pursewd = await db.get(`purse_${message.author.id}`)
    
        let wdbank = await db.get(`bank_${message.author.id}`)
    
    
        if (wdbank >= withdraw) {
          if (withdraw) {
    
            message.reply({
              content: `You have withdrawn **¥${withdraw}** from your bank`
            })
            await db.set(`purse_${message.author.id}`, pursewd + withdraw)
            await db.set(`bank_${message.author.id}`, wdbank - withdraw)
    
    
          } else {
    const errrembed = new MessageEmbed()
    .setTitle(``)
     .setDescription(`*You must enter a amount when sending*`)
    .setColor(`RED`)
    message.reply({ embeds: [errrembed] })
    
          }
        } else {
    const errrrembed = new MessageEmbed()
    .setTitle(``)
     .setDescription(`*You don't have that much money in your bank*`)
    .setColor(`RED`)
    message.reply({ embeds: [errrrembed] })
        }
    }
}