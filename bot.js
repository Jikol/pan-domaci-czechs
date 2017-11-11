const discord = require('discord.js');
const TOKEN = "";
const PREFIX = ".";
var bot = new discord.Client();
var game = {name: ".help pro příkazy"};

bot.on('message', (message) => {
    console.log(message.content);
});

bot.on('ready', function () {
    console.log("Pripraven");
});

bot.on('message', (message) => {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var vypis = message.content.substring(PREFIX.length).split(" ");

    switch (vypis[0].toLowerCase()) {
        case 'test':
            {
                message.channel.send("Funguju :)");
                break;
            }
        case 'info':
            {
                message.channel.send("Vítej na našem Discordu! Zde se scházíme na různé akce, jakožto raidy, fractály či guildmise. Neboj se připojit a zahrát si s námi :)");
                break;
            }
        default:
            {
                message.channel.send("Nesprávný příkaz :(");
                break;
            }
    }

});

bot.setGame(game);
bot.login(process.env.BOT_TOKEN);
