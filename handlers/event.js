const fs = require('fs');

module.exports = async (client) => {
    fs.readdir(`${process.cwd()}/events/`, (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            const event = require(`${process.cwd()}/events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
        console.log(`[>] ${files.length} events loaded [<]`)
    });
}