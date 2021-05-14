//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../config.json').prefix)
module.exports = {
    name: `help`,
    description: `help for the bot`,
    execute(message, args){
        console.log(`someone asked siri for help`)
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help Menu')
            .addFields(
                { name: `${prefix} help`, value: 'Shows this menu.' },
                { name: `hey siri`, value: 'Siri says hi to you.' },
                { name: `${prefix} who are you`, value: 'Siri says something about her.' },
                { name: `${prefix} give me the link`, value: 'Siri sends you link to invite her to your server.' },
                { name: `${prefix} register`, value: 'Send to access the server.' },
                { name: `${prefix} are you a robot?`, value: 'Siri proofs that she is not a robot.' },
                { name: `${prefix} rules`, value: 'Siri sends you list of rules on the server.' },
                { name: `${prefix} give me the github link`, value: 'Siri sends you link to her GitHub repo.' },
                { name: `${prefix} logs server`, value: 'Siri sends you link to her logging server.' },
            )
            message.channel.send(helpEmbed)
    }
}