let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'text',
    aliases: ['t'],
    cooldown: 1,
    perms: [],
    dir: 'fun',
    owner: false,
    
    run :async (client, message, args) => { 
        let x = message.content.slice(1).trim().split(/ +/)
        x.shift()
        x.pop()
        let msg = x.join(' ')
        let callusr = message.mentions.users.first()
        let authoruser = message.author.username
        let phoneemoji = "<:phone:1066146220638216363>"
        if (callusr) {
          if (msg) {
    
        callusr.send({
          embeds: [new MessageEmbed()
            .setTitle('New Message ⚠')
            .setDescription(`**Message** ${phoneemoji}\n\n"${msg}" \n\nSent by **${authoruser}**`)
            .setColor(`BLURPLE`)
          ]
        })
        const callmEmbed = new MessageEmbed()
          .setTitle(`Texted ${callusr}`)
          .setDescription(`You have texted ${callusr}. ${phoneemoji}\n\n**Your text**\n\n*"${msg}"*`)
          .setColor("#4375ae")
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send({ embeds: [callmEmbed] })
          } else {
            const errorembed = new MessageEmbed()
            .setDescription(`You must send a text with it or else it wont send bozzo! ${phoneemoji}`)
            .setColor("RED")
            message.channel.send({ embeds: [errorembed] })
          }
        } else {
          const newerrembed = new MessageEmbed()
            .setDescription(`You must send a user with it or else it wont send! ${phoneemoji}`)
            .setColor("RED")
            message.channel.send({ embeds: [newerrembed] })
        } 
    }
}