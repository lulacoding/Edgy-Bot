
const Discord = require("discord.js");

//about pt 1
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('#663399')
    .setTitle('About The Bot')
    .setImage('https://i.pinimg.com/originals/92/e5/49/92e54928e074af694e6bbf6f11305cd9.jpg')
    .setAuthor('ct', 'https://cdn.discordapp.com/attachments/650217919166545937/710031725819985920/gif.gif')
    .addField('What is Edgy Bot?', 'The Edgy Bot is a bot that sends Out random Edgy Picturs On Command.')
    .addField("Add the Bot", "Add EdgyBot to your Server by using the link [Here](https://discord.com/api/oauth2/authorize?client_id=709688883834650634&permissions=0&scope=bot)")
    .addField(
      'Bot Commands', '.About (This Command)‏‏‎ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎.Edgypic (Sends out a edgy picture in chat)‏‏‎ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎.8ball (Your Classic 8ball command) ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎.Uptime(See how long the Bot has been Online)'
    )
    .setFooter('Made By lula#1397', 'https://cdn.discordapp.com/attachments/650217919166545937/710031725819985920/gif.gif')
    message.channel.send({embed}).catch(console.error);
}
