const discord = require('discord.js');
const bot = new discord.Client();
const TOKEN = "MzQ2NDE4NjMzNjg3MzAyMTQ2.DNJOfw.kTjJ0S5ayhzL5wRy8GBKQEpfmjI";

bot.on('message', (message) => {
    if (message.content == '.test') {
        message.channel.sendMessage('Funguju :)');
    }
});

bot.login(TOKEN);
bot.login(process.env.BOT_TOKEN);
