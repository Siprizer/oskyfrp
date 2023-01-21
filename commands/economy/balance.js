const Database = require("@replit/database")
const db = new Database()
let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'balance',
    aliases: ['bal'],
    cooldown: 1,
    perms: [],
    dir: 'economy',
    owner: false,
    
    run :async (client, message, args) => {  
        let balance = await db.get(`purse_${message.author.id}`)
        let bank = await db.get(`bank_${message.author.id}`)
        let networth = (balance + bank)
    
        if (balance === null) balance = 0
        if (bank === null) bank = 0
        if (networth === null) networth = 0
    
        const moneyEmbed = new MessageEmbed()
          .setTitle(`${message.author.username}'s Balance`)
          .setDescription(`\n<:pursev1:1055942034185273396> **Purse:** ¥${balance}\n🏦 **Bank:** ¥${bank}\n-------=+=-------\n💴 **Networh:** ¥${networth}\n\n*Do !allowance to earn your 15 minute allowance*`)
          .setColor("#e02828")
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send({ embeds: [moneyEmbed] })
    }
}