module.exports = {
	name: 'info',
	description: 'Dumps all information about the bot.',
	args: false,
	execute(message, args) {
		message.channel.send("I'm a bot.");
	},
};
