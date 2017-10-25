const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message', (message) => {
    if (message.content == '.test') {
        message.channel.sendMessage('Funguju :)');
    }
});

bot.on('message', (message) => {
    if (message.content == 'adam') {
        message.channel.sendMessage('Jak se vede adame :)');
    }
});

bot.login(process.env.BOT_TOKEN);
