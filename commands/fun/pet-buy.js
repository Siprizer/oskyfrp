let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'buypet',
    aliases: ['bp'],
    cooldown: 1,
    perms: [],
    dir: 'fun',
    owner: false,
    
    run :async (client, message, args) => {  
    try{ 
        console.log("works")
        let mrcost = 17000
        if(message.content.includes("Mr. 007")) {
          console.log("works too")
            }
    let mrcvalueca = 5
    let mrcvalue = await db.get(`level_${message.author.id}`)
     let mrv = await db.get(`purse_${message.author.id}`) 
         if (mrv <= mrcost && mrcvalue >= mrcvalueca) {
           const mrval = new MessageEmbed()
             .setTitle(`Don't fit requirements`)
           .setDescription(`\nYou need ~~Y~~${mrcost} to buy the pet and level [**5**]`)
           .setColor(`RED`)
    .setThumbnail(`https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif`)
             message.channel.send({ embeds: [mrval] })
         } else {
           const mrvalaac = new MessageEmbed()
             .setTitle(`You've gotten Mr. 007`)
           .setDescription(`\nYou have achieved Mr. 007!\n\n*See the rest of the pets !pet list*`)
           .setColor(`#63af5c`)
           message.channel.send({ embeds: [mrvalaac] })
            await db.set(`purse_${message.author.id}`, mrv - mrcost)
         }  
              let snowballcost = 5000
              if(message.content.includes("Snowball")) {
                console.log("works aswell")
              }
              let snowvala = 1
    let slnow = await db.get(`level_${message.author.id}`)
     let snrv = await db.get(`purse_${message.author.id}`) 
         if (snrv <= snowballcost && slnow >= snowvala) {
           const snowrca = new MessageEmbed()
             .setTitle(`Don't fit requirements`)
           .setDescription(`\nYou need ~~Y~~${snowballcost} to buy the pet and level [**1**]`)
           .setColor(`RED`)
    .setThumbnail(`https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif`)
             message.channel.send({ embeds: [snowrca] })
         } else {
           const msnowy = new MessageEmbed()
             .setTitle(`You've gotten Snowball!`)
           .setDescription(`\nYou now have the pet **Snowball**!\n\n*See the rest of the pets !pet list*`)
           .setColor(`#63af5c`)
           message.channel.send({ embeds: [msnowy] })
         } 
    }catch(e){ 
        console.log(e)
    }
    }
}