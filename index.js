const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const moment = require('moment')

const Client = new Discord.Client();
const config = require('./config.json')
Client.commands = new Enmap();
chalk = require('chalk');
Client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      Client.on(eventName, event.bind(null, Client));
    });
  });
  
  Client.commands = new Enmap();
  
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${chalk.red(commandName)} ${chalk.blue('was')} ${chalk.yellow('loaded')} ${chalk.green('successfully')}`);
      Client.commands.set(commandName, props);
    });
});

Client.on("ready", () => {
  Client.user.setActivity(`on ${Client.guilds.size} servers | .About`);
});

Client.on("guildCreate", guild => {
  var found = false;
  guild.channels.forEach(function(channel, id) {
      // If a channel is already found, nothing more needs to be done
      if(found == true || channel.type != "text") {
        return;
      }
      // If the channel isn't found and the bot has permission to 
      // send and read messages in the channel, send a welcome message there
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true;
        return channel.send(
             welcomeEmbed = new Discord.RichEmbed()
             .setColor('#663399')
             .setTitle('Thank For Adding My Bot!')
             .addField('Thanks!', 'To Use The Bot use the Commands .About & .edgypic')
             .setImage('https://i.pinimg.com/originals/92/e5/49/92e54928e074af694e6bbf6f11305cd9.jpg')
        )
      }
  })
});
Client.login(config.token)