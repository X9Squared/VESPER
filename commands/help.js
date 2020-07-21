const {prefix} = require ('../config.json');
module.exports = {
    name: 'help',
	description: 'A friendly help command! :)',
	args: true,
    cooldown: 5,
    execute (message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            data.push("Here's a list of all my commands:");
            data.push(commands.map(command => "**" + command.name + "**").join(', '));
            data.push("You can send **" + prefix + "help [Command Name]** to get help on a specific command!");
            return message.author.send(data, {split:true}).then(() => {
                if (message.channel.type === 'dm') return;
                message.reply("I've sent you a help DM.");

            })
            .catch (error => {
                console.log("DM failed to" + message.author.tag + "\n", error);
                message.reply("I wasn't able to DM you - please check your DM settings.")
            });
        }
    }
}