const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
  console.log('Pripraven');
});

client.on('message', message => {
  if(message.content === 'Praise Joko!') {
    message.reply('Joko wishes you thanks...');
  }
});

client.login(process.env.BOT_TOKEN);
