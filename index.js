const Discord = require('discord.js');
const token = 'NzAwNDQ0NjQxMjAzNDUzOTgz.XpjHYg._rNnO7nF5ZFUUBf9bx7lgd0K8Ek'
const {
  CommandoClient
} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
  commandPrefix: '!',
  owner: '198598210367913984',
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['general', 'General, multipurpose commands'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity('Super-ultra-hyper-threading');
});

client.on('error', console.error);

client.login(token);
