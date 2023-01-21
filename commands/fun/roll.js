let { MessageEmbed } = require("discord.js")
const randInt = require(`../../functions.js`)
module.exports = {
    name: 'roll',
    aliases: ['r'],
    cooldown: 1,
    perms: [],
    dir: 'fun',
    owner: false,
    
    run :async (client, message, args) => { 
        try{
        let rollh = parseInt(args[1])
        let rollu = parseInt(args[2])
      
        if (rollh) {
          if (rollu) {
            const rollcorEmbed = new MessageEmbed()
          .setTitle(``)
          .setDescription(`**${message.author.username}** 🎲\nYou have rolled ***${rollh}*** to ***${rollu}***\n\n\n>   Landed on - **${randInt(rollu, rollh)}**.`)
          .setColor("GREEN")
        message.channel.send({ embeds: [rollcorEmbed] })
    
          } else {
    
    const errembed = new MessageEmbed()
    .setTitle(``)
     .setDescription(`*You must enter a amount when sending*`)
    .setColor(`RED`)
    message.reply({ embeds: [errembed] })
          }
        } else {
    
    const erembed = new MessageEmbed()
    .setTitle(``)
     .setDescription(`You must enter a amount when sending`)
    .setColor(`RED`)
    message.reply({ embeds: [erembed] })
        } 
    }catch(e){
        console.log(e)
    }
    }
}