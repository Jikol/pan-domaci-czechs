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
                            var embed = new Discord.RichEmbed()
                                .addField("Něco se pokazilo...", "Jenom zástupci mohou mazat zprávy!")
                                .setColor(0x00ba25)
                                .setFooter("Pro více info napiš .pomoc")
                            message.channel.sendEmbed(embed);
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

bot.login(process.env.HEROKU_TOKEN);
