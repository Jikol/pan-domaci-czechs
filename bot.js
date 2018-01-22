const discord = require('discord.js');
const PREFIX = ".";
const PREFIX_LOOP = "/";
var bot = new discord.Client();
var motd;
var rmotd;

bot.on('ready', () => {
    console.log("Pripraven");
});

bot.on('message', (message) => {
    /*if (message.author.equals(bot.user)) return;*/

    if (message.content.startsWith(PREFIX)) {
        var zprava = message.content.substring(PREFIX.length).split(" ");

        switch (zprava[0].toLowerCase()) {
            case 'informace':
                {
                    message.channel.send("Vítej na našem Discordu! Zde se scházíme na různé akce, jakožto raidy, fractály či guildmise. Neboj se připojit a zahrát si s námi :)");
                    break;
                }
        }
    }

    if (message.content.startsWith(PREFIX_LOOP)) {
        var type = message.content.substring(PREFIX_LOOP.length).split(" ");

        switch (type[0].toLowerCase()) {
            case 'start':
                {
                    if(type[1].toLowerCase() === 'motd') {
                        motd = bot.setInterval(motdFunction, 86400000);
                        message.channel.send("MOTD SPUŠTĚNO");
                    }
                    if(type[1].toLowerCase() === 'rmotd') {
                        rmotd = bot.setInterval(rmotdFunction, 86400000);
                        message.channel.send("RMOTD SPUŠTĚNO");
                    }
                    break;

                }
            case 'stop':
                {
                    if(type[1].toLowerCase() === 'motd') {
                        bot.clearInterval(motd);
                        message.channel.send("MOTD ZASTAVENO");
                    }
                    if(type[1].toLowerCase() === 'rmotd') {
                        bot.clearInterval(rmotd);
                        message.channel.send("RMOTD ZASTAVENO");
                    }
                    break;
                }
        }

    }

    function motdFunction() {
        var channelID = "186898336261996544";
        bot.channels.get(channelID).send("☞ WEB: http://czechs.cz [zatím ve výstavbě] \n☞ FB: http://facebook.com/groups/CzechsCZ\n☞ PRO VÍCE INFO NAPIŠ '.informace'");
    }

    function rmotdFunction() {
        var channelID = "403266878912593920";
        bot.channels.get(channelID).send("☞ GUILDOVNÍ AKCE ☜   [RAIDY -> PÁTEK,SOBOTA 20:00]\n     °°°°°°°°°°°°°°°°°°\n Stálá parta\n Normal: 👿 1,2,3,4\n Tréning: 👿 5\n Pokud někdy chybí, je možnost jít za něj.\n Více ⓘ /w Drti nebo Dany");
    }
});

bot.login(process.env.HEROKU_TOKEN);
