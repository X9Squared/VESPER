const index = require("D:\\Personal Files\\VESPER\\index.js");

module.exports = {
  name: 'exit',
  description: 'Closes bot user (requires additional confirmation).',
  execute(message, args) {
    const filter = (reaction, user) => {
      return reaction.emoji.name === '✅' && user.id === message.author.id;
    };
    message.channel.send("Are you sure you want to close VESPER?").then(sentMessage => {
      sentMessage.react("✅")
      console.log("check1");
      sentMessage.awaitReactions(filter, {
          max: 4,
          time: 5000,
          errors: ['time']
        })
        .then(collected => console.log(collected.size))
        .catch(collected => {
          console.log(collected.size);
          if (collected.size > 0) {
            console.log("VESPER closing...");
            index.discClient.destroy();
          } else {
            message.channel.send("No confirmation recieved.");
          }
        });
    })
  },
};
