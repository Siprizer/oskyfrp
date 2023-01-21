let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'petlist',
    aliases: ['listpets'],
    cooldown: 1,
    perms: [],
    dir: 'fun',
    owner: false,
    
    run :async (client, message, args) => {  
    try{ 
        let snow = "Snowball"
        let mr = "Mr. 007"
        let t = "Thrall"
        const petlEmbed = new MessageEmbed()
          .setTitle(`Pet list`)
          .setDescription(`\n**These are the pets**\n\n${mr}\n${snow}\n${t}\n\nYou need to be level [**15**] to unlock ${mr}.`)
          .setColor(`BLURPLE`)
        message.channel.send({ embeds: [petlEmbed] })
    }catch(e){ 
    console.log(e)
    }
    }
}