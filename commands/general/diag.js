const { Command } = require("discord.js-commando");

module.exports = class Diagnostic extends Command {
	constructor(client) {
		super(client, {
			name: 'diagnostic',
			aliases: [],
			group: 'general',
			memberName: 'diag',
			description: 'Dumps all bot info, because why not.',
		});
	}

  run(message) {
    return message.say("Wheee I'm a bot!");
  }
};
