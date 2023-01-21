const Database = require("@replit/database")
const db = new Database()
let { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'help',
    aliases: ['h'],
    cooldown: 1,
    perms: [],
    dir: 'info',
    owner: false,
    
    run :async (client, message, args) => { 
        message.channel.send(`*Status* - **ONLINE**\n\nTo use this bot start with **!balance**, to check your balance.\nWe also have **!allowance** which gives you 1250 yen each hour.\nTo pay people type **!pay** | User | | Amount |.\nTo work do **!work**.\n Do **!deposit** | Amount | To deposit into the bank, **withdrawing** is the same.\nDo **!roll** | Number | | Number | to roll a number in between.\nTo text **!text** | Message | | User |\nCredit to **Siprizer** for making this happen!\n*report any bugs that you find.*`)
   
    }
}