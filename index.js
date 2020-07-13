//Imports and constants
const Discord = require('discord.js');
const config = require("./config.json");
const fs = require('fs');
const { cooldown } = require('./commands/info');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const cooldowns = new Discord.Collection();
module.exports.discClient = client;

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);

	if (commandName.args && !args.length) {
		return message.channel.send("You didn't provide any arguments, dummy ${message.author}!");
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	console.log(cooldownAmount + "cooldownamount");
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		console.log(expirationTime);
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			console.log(timeLeft);
			return message.reply("please wait " + timeLeft.toFixed(1) + " more second(s) before reusing the " + command.name + " command.")
		}	
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		console.log("There was a problem executing that command.");
	}
});

client.login(config.token);
