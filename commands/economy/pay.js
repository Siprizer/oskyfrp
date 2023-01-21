const Database = require("@replit/database")
const db = new Database()
let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'pay',
    aliases: ['p'],
    cooldown: 1,
    perms: [],
    dir: 'economy',
    owner: false,
    
    run :async (client, message, args) => {  
        let user = message.mentions.users.first()

        let amount = parseInt(args[2])
        if (user) {
          if (amount) {
            let bal = await db.get(`purse_${message.author.id}`)
            if (bal < amount) {
          const erpaymembed = new MessageEmbed()
    .setTitle(``)
     .setDescription(`You do not have ${amount} to send!`)
    .setColor(`RED`)
    message.reply({ embeds: [erpaymembed] })
            } else {
              let tobal = await db.get(`purse_${user.id}`)
    
          const paymembed = new MessageEmbed()
    .setTitle(`Sent ¥${amount}`)
     .setDescription(`You have sent ¥${amount} to ${user}.`)
    .setColor(`GREEN`)
    message.reply({ embeds: [paymembed] })
              await db.set(`purse_${message.author.id}`, bal - amount)
              await db.set(`purse_${user.id}`, tobal + amount);
    
            }
        } else {
            const errpaymembed = new MessageEmbed()
      .setTitle(``)
       .setDescription(`You didn't mention a amount to send to send!`)
      .setColor(`RED`)
      message.reply({ embeds: [errpaymembed] })
            }
          } else {
            const errrpaymembed = new MessageEmbed()
      .setTitle(``)
       .setDescription(`You need to send a user to send the money to!`)
      .setColor(`RED`)
      message.reply({ embeds: [errrpaymembed] })
          }
        
    }
}
