const fs = require('fs');

module.exports = async (client) => {
    fs.readdir(`${process.cwd()}/commands/`, (err, files) => {
        if (err) console.log(err);
        files.forEach(dir => {
            fs.readdir(`${process.cwd()}/commands/${dir}/`, (err, file) => {
                if (err) console.log(err);
                file.forEach(f => {
                    const comm = require(`${process.cwd()}/commands/${dir}/${f}`);
                    client.commands.set(comm.name, comm);
                    comm.aliases.forEach(alias => {
                        client.aliases.set(alias, comm.name);
                    });
                });

                console.log(`[>] Loaded ${file.length} commands [<]`)
            });
        });
    })
}