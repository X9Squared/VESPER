module.exports = {
  name: 'assignproject',
  description: 'Assigns ECH discord users to project roles',
  execute(message, args) {
    const userList = [];
    const filter = (reaction, user) => {
      return ['🎙','🐦','☣️'].includes(reaction.emoji.name);
    };
    message.channel.send("React below for your project assignment - the birdie for SPSK, biohazard for biopolis, microphone for podcast. If you're in multiple projects just react for all the ones you're in!").then(sentMessage => {
      sentMessage.react("🎙️");
      sentMessage.react("🐦");
      sentMessage.react("☣️");
      sentMessage.awaitReactions(filter)
        .then(collected => console.log(collected.size))
        .catch(collected => {
          const reaction = collected.first();
          if(reaction.emoji.name === '🎙') {
            console.log(userList[0].username);
          }
        });
    })
  },
};
