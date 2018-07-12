const discord = require('discord.js');
const PREFIX = ".";
var bot = new discord.Client();

bot.on('ready', () => {
    console.log("Pripraven");
});

bot.on('message', (message) => {

    if (message.content.startsWith(PREFIX)) {
        var zprava = message.content.substring(PREFIX.length).split(" ");

        switch (zprava[0].toLowerCase()) {
            case 'pomoc':
                {
                    function vypis() {
                        message.delete();
                        message.channel.send("Pro více info se ptej rank Zástupce a víš...");
                    }
                    vypis();
                    break;
                }
            case 'smaz':
                {
                    async function smazat() {
                        message.delete();

                        if (!message.member.roles.find("name", "Zástupce")) {
                            message.channel.send('Jenom zástupci mohou mazat zprávy!');
                            return;
                        }

                        if (isNaN(zprava[1])) {
                            return;
                        }

                        const fetched = await message.channel.fetchMessages({
                            limit: zprava[1]
                        });
                        console.log(fetched.size + ' zprav bude smazano');

                        message.channel.bulkDelete(fetched).catch(error => message.channel.send(`Error: ${error}`));
                    }
                    smazat();
                    break;
                }
        }
    }
});

bot.login('MzQ2NDE4NjMzNjg3MzAyMTQ2.DijNLA.k8m_z6ojuHkovXzxaK3EEy2e8XQ');
/*bot.login(process.env.HEROKU_TOKEN);*/
