let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'petlevel',
    aliases: ['pl'],
    cooldown: 1,
    perms: [],
    dir: 'fun',
    owner: false,
    
    run :async (client, message, args) => {  
        
    try{ 
   
        let plvl = await db.get(`level_${message.author.id}`)
    
        if (plvl === null) plvl = 0
    
        const plvEmbed = new MessageEmbed()
          .setTitle(`Pet Level`)
          .setDescription(`\n[**${plvl}**]\n\nYou're pet level is [**${plvl}**].\n\n*If you haven't leveled up enough level up to [**15**]*`)
          .setColor(`BLURPLE`)
        message.channel.send({ embeds: [plvEmbed] })
    }catch(e){ 
    console.log(e)
    }
    }
}