const Discord = require('discord.js');
const client = new Discord.Client();
const token = '____________________'

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
  if (message.content === '!readycheck') {
    message.channel.send("Ready");
  }
});


client.login(token);
