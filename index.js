const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.send("Hello hell.")
})


let { Intents, Client, MessageEmbed, Collection } = require("discord.js")
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,

  ],
  presence: {
    activities: [{
      name: `with roleplayers`,
      type: "PLAYING",
    }],
    status: "dnd"
  }
})

app.listen(3000, () => {
  console.log(`Bot is ready`)
})

client.on("messageCreate", async message => {




  if (message.content === "-ftirphelp") {
    const firpEmbed = new MessageEmbed()
      .setTitle(`Fighting in Roleplay Rules`)
      .setDescription(`\n**Basic**\n\nDo not kill someone in rp unless you have KPR/Kill permission.\nFighting someone in rp you MUST use !roll refer to !frphelp for help.\n\n**Advanced**\n\nWhoever gets the bigger number for this wins, The rolls will go back and forth Unless you get a KO which then the person you are fighting will be knocked-out\n\n6th grade to 8th grade !roll 1 75 \n9th to 12th grade !roll 1 120 \nCollege !roll 1 150.\n\nYou can only take 2000 if your mugging.`)
      .setColor("#63af5c")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send({ embeds: [firpEmbed] })
  }
  if (message.content === "-failrphelp") {
    const failrpEmbed = new MessageEmbed()
      .setTitle("Fail Roleplay rules")
      .setDescription("\n**Basic**\n\nFail roleplaying means if you strictly obbay any rules for roleplay you will be reported as Fail-Roleplay. To not fail roleplay you must know the basics to roleplay.\n\nDon't do something that is out of your character/plot\nDo not type oocly in roleplay chats.\nDon't fight with staff, or roleplay staff.\nFollow EVERY roleplay rule in rules channel.")
      .setColor("#63af5c")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send({ embeds: [failrpEmbed] })
  }


   
})
client.commands = new Collection();
client.aliases = new Collection();
cooldowns = new Collection();
["command", "event"].forEach(file => { require(`./handlers/${file}`)(client) })

client.login(process.env.token) 
