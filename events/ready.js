module.exports = (client) => {
    console.log(`Ready to serve in ${chalk.red(client.channels.size)} channels on ${chalk.red(client.guilds.size)} servers, for a total of ${chalk.red(client.users.size)} users.`);
  }