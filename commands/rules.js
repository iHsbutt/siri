//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: `rules`,
    description: `rules for da server`,
    execute(message, args){
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Rules')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Rule 1', value: `Don't harass people`, inline: true },
            { name: 'Rule 2', value: ` Don't post NSFW`, inline: true },
            { name: 'Rule 3', value: `Don't be super racist (being ironic is fine)`, inline: true },
            { name: 'Rule 4', value: `Only spam when it's FUNNY`, inline: true },
            { name: 'Rule 5', value: `No explicit self promotion`, inline: true },
            { name: 'Rule 6', value: 'use your head. if it seems stupid, it probably is.', inline: true },
        )

        //say da embed

        message.channel.send(RulesEmbed)

    }
}

