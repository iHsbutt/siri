const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: `register`,
    description: `register yourself in a server`,
    execute(message, args){
        console.log(`someone wants to register`)

        //find da role

        let role = message.guild.roles.cache.find(r => r.name === "Registered");

        //give da role

        //another shit that wasted so much time of my life
        
        message.member.roles.add(role)      

        //set da author id

        const RegisteredUserID = message.author.id

        //create da channel

        message.guild.channels.create(`locker - ${RegisteredUserID}` , { 
            type: 'text',
            permissionOverwrites: [

                //THIS TOOK ME SO MUCH TIME AND IT WAS SO SIMPLE WTF

               {
                 id: message.author.id,
                 allow: ['CREATE_INSTANT_INVITE', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS'],
              },
              {
                id: message.guild.roles.everyone,
                deny:  ['VIEW_CHANNEL'],
              }
            ],
          })

        //construct da embed

        const RegisteredEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription('registered succsessfully');
        
        //send da embed

        message.channel.send(RegisteredEmbed)
    }
}