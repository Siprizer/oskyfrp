const { Collection } = require("discord.js");

module.exports = async (client, message) => {
    if(message.author.bot) { return }
    const prefix = '!'
    if(!message.content.startsWith(prefix)){ return }

    const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();
    const args = message.content.split(' ').slice(1);
    let cmd;

    if (client.commands.has(command)) { cmd = client.commands.get(command) }
    else if(client.aliases.has(command)) { cmd = client.commands.get(client.aliases.get(command)) }
    if(!cmd) return;

    const comm = require(`${process.cwd()}/commands/${cmd.dir}/${cmd.name}`);
    
    if (!cooldowns.has(comm.name)) { cooldowns.set(comm.name, new Collection()); }
    const now = Date.now();
    const timestamps = cooldowns.get(comm.name);
    const cooldownAmount = (comm.cooldown || 2) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Wait ${timeLeft.toFixed(1)} more second${timeLeft.toFixed(1)<2 ? '' : 's'} to use **${comm.name}**`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // PERMISSION CHECKER
    if (comm.perms) {
        if (!message.member.permissions.has(comm.perms)) {
            return message.reply(`You're missing permissions : ${comm.perms.map(p => `**${p}**`).join(', ')}`)
        }
    }
    if(comm.owner && !message.author.id === "737880313493061712" || comm.owner && !message.author.id === "1060321410842624081"){
        return message.reply({
            content: `You're not able to use these commands`
        })
    }

    cmd.run(client, message, args)
};
