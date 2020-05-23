//changelog command
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('#663399')
    .setTitle('Change Log')
    .setAuthor('ct', 'https://cdn.discordapp.com/attachments/650217919166545937/710031725819985920/gif.gif')
    .addField('12 Of May 2020', 'Bot Was Created')
    .addField("16 Of May 2020", 'Added the About Command')
    .addField('22 Of May 2020', 'Made code easier to read and Less complex By using Command Handlers')
    .setFooter('Made By lula#1397', 'https://cdn.discordapp.com/attachments/650217919166545937/710031725819985920/gif.gif')
    message.channel.send({embed}).catch(console.error);
}
