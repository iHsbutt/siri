        module.exports = {
            name: `whois`,
            description: `who is siri`,
            execute(message, args){
                console.log(`someone wants to know who is siri`)
                const SiriWhoRU = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('who am i and why did i use embeds')
                .addFields(
	            { name: '\u200B', value: '\u200B' },
	            { name: 'who is siri', value: 'a dumb bot made by iH and Puffercat', inline: true },
	            { name: 'why did i use embeds', value: 'because i like fancy things', inline: true },
                );
                message.channel.send(SiriWhoRU)
            }
        }