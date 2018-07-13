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
                        const embed = new discord.RichEmbed()
                            .setTitle("Facebook")
                            .setAuthor("Czechs [CZ]", "https://i.imgur.com/MxduEjo.png")
                            .setColor(0x00ba25)
                            .setFooter("Jikol.7265 |", "https://i.imgur.com/3nZV0be.png")
                            .setThumbnail("https://i.imgur.com/JxHPRoN.jpg")
                            .setTimestamp()
                            .setURL("https://www.facebook.com/groups/CzechsCZ/")
                            .addField("Vítej na našem Discordu!", "Zde cilíme naši hlavní komunikaci, jak už s domlouváním raidů a fraktálů, tak s radami a polemizováním nad aktuální situací ve světě Guild Wars! \n\nPro více info se ptej rank Zástupce a víš... \n\n**Chovej se zde slušně!**")
                            .setImage("https://i.imgur.com/RHXpi3R.png")
                        message.channel.sendEmbed(embed);
                    }
                    vypis();
                    break;
                }
            case 'smaz':
                {
                    async function smazat() {
                        message.delete();

                        if (!message.member.roles.find("name", "Zástupce")) {
                            var embed = new discord.RichEmbed()
                                .addField("Něco se pokazilo...", "Jenom zástupci mohou mazat zprávy!")
                                .setColor(0x00ba25)
                                .setFooter("Pro více info napiš .pomoc")
                                .setThumbnail("https://cdn.pixabay.com/photo/2013/07/12/13/21/delete-146891_960_720.png")
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
