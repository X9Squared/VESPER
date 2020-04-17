const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzAwNDQ0NjQxMjAzNDUzOTgz.XpjHYg._rNnO7nF5ZFUUBf9bx7lgd0K8Ek'

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
