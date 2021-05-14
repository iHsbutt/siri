//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../config.json').prefix)
module.exports = {
    name: `ping`,
    description: `when someone pings the bot`,
    execute(message, args){
        console.log(`someone pinged siri`)
        const GotPingedWTF = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('why did you ping me?')
        .setDescription(`my prefix is ${prefix}.`)
        message.channel.send(GotPingedWTF)
    }
}