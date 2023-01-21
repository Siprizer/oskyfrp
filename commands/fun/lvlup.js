let { MessageEmbed } = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports = {
    name: 'lvlup',
    aliases: ['lp'],
    cooldown: 1,
    perms: [],
    dir: 'fun',
    owner: false,
    
    run :async (client, message, args) => {  
    try{ 
        const pcheck = await db.get(`tdayCheck_${message.author.id}`);
    const ptimeout = 172800000;
    if (pcheck !== null && ptimeout - (Date.now() - pcheck) > 0) {
      const ms = require("pretty-ms")
      const ptimeLeft = ms(ptimeout - (Date.now() - pcheck))
      const plvupnotEmbed = new MessageEmbed()
        .setTitle(`Not yet`)
        .setDescription(`\nYou'll have to wait **${ptimeLeft}**.`)
        .setColor(`RED`)
        .setThumbnail(`https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif`)
      message.channel.send({ embeds: [plvupnotEmbed] })

    } else {
      let tdayreward = 1
      let currentlvl = await db.get(`level_${message.author.id}`)
      const lvlupconfirmEmbed = new MessageEmbed()
        .setTitle(`Pet Level up!`)
        .setDescription(`(**✓**) You have leveled up by **${tdayreward.toLocaleString()}**`)
        .setColor(`#63af5c`)
      message.channel.send({ embeds: [lvlupconfirmEmbed] })
      await db.set(`level_${message.author.id}`, currentlvl + tdayreward)
      await db.set(`tdayCheck_${message.author.id}`, Date.now())
    }
    }catch(e){ 
        console.log(e)
    }
    }
}