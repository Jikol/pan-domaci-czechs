const discord = require('discord.js');
const PREFIX = "$";
var bot = new discord.Client();

bot.on('ready', () => { 
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

bot.login(process.env.HEROKU_TOKEN);
