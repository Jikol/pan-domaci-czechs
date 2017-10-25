const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message', (message) => {
    if (message.content == '.test') {
        message.channel.sendMessage('Funguju :)');
    }
});


bot.login(process.env.BOT_TOKEN);
