const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
  console.log('Pripraven');
});

client.on('message', function(message) {
  if(message.content == ".clear") {
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      let messagecount = parseInt(numberofmessages); 
      message.channel.fetchMessages({limit: messagecount})
        .then(function(messagecount) {
          message.channel.bulkDelete(messagecount);  
        }, function(err) {
          message.channel.send("Nemáš práva mazat správy")
        })                                           
    }
  }
});



client.login(process.env.BOT_TOKEN);
