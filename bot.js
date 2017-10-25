const discord = require('discord.js');
const bot = new discord.Client();
const TOKEN = "MzQ2NDE4NjMzNjg3MzAyMTQ2.DNJOfw.kTjJ0S5ayhzL5wRy8GBKQEpfmjI";
const prefix = ".";

bot.on('message', (message) => {
    console.log(message.content);
});

bot.on('ready', function () {
    console.log("Pripraven");
});

bot.on('message', function (message) {
    if (!message.content.startsWith(prefix)) return;

    var vypis = message.content.substring(prefix.lenght).split(" ");

    switch (vypis[0].toLowerCase()) {
        case "test":
            message.channel.send("Funguju :)");
            break;
        case "info":
            message.channel.send("Zdravím tě na našem discordu. Zde se setkáváme při nejrůznějších akcích, ale hlavně raidech a guild misích.");
            break;
    }

});


bot.login(TOKEN);
bot.login(process.env.BOT_TOKEN);
