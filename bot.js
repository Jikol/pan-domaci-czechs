const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
  console.log('Pripraven');
});

client.on('message', function(message) {
  if(message.content == ".clear") {
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages()
        .then(function(list) {
          message.channel.bulkDelete(list);  
        }, function(err) {
          message.channel.send("Nemáš práva mazat správy")
        })                                           
    }
  }
});



client.login(process.env.BOT_TOKEN);
