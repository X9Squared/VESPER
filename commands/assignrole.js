module.exports = {
  name: 'assignrole',
  description: 'Assigns server members to specific roles (as defined)',
  args: false,
  execute(message, args) {
    message.channel.send("Under construction - awaiting partial implementation");
    /*const filter = (reaction, user) => {
      return ['🐍', '👻', '💨'].includes(reaction.emoji.name);
    };
    message.channel.send("React below for your specified role (VALORANT PLACEHOLDER).").then(sentMessage => {
      sentMessage.react("🐍");
      sentMessage.react("👻");
      sentMessage.react("☣️");
      sentMessage.awaitReactions(filter)
        .then(collected => console.log(collected.size))
        .catch(collected => {
          var reaction = collected.first();
          if (reaction.emoji.name === '🐍') {
            console.log("viper react test");
          }
        });
    })*/
  },
};
