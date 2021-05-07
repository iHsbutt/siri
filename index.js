//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'hey siri';
const token = 'UR BOTS TOKEN';

//variables
const Level = '0'
const Xp = '1'

//she alive poggers

bot.on('ready', () => {
    console.log(`siri logged in poggers`)
    bot.user.setActivity('the impostor', ({type: "LISTENING"}))
})

bot.on('message', message =>{
    
    //hi

    let msg = message;
    if(msg.content === 'hey siri'){
        msg.channel.send(`hi ${message.author.username}`)
        console.log(`someone said hey siri`)
    }

    //test

    if(msg.content === `${prefix} test`){
        msg.author.send('działam, ok?')
        msg.channel.send('działam, ok?')
        console.log(`someone said hey siri test`)
    }

    //embed test

    if(msg.content === `${prefix} embed test lol`){
        //embed hell
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('you asked me for test thats what i give you lol')
            .setDescription('a very creative description')

        msg.channel.send(exampleEmbed)
        console.log(`someone tests embeds`)
    }

    //who is siri

    if(msg.content === `${prefix} who are you`){
        const SiriWhoRU = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('who am i and why did i use embeds')
        .addFields(
	    { name: '\u200B', value: '\u200B' },
	    { name: 'who is siri', value: 'a dumb bot made by iH', inline: true },
	    { name: 'why did i use embeds', value: 'because i like fancy things', inline: true },
        );
        msg.channel.send(SiriWhoRU)
        console.log(`someone wants to know who is siri`)
    }

    //invite link

    if(msg.content === `${prefix} give me the link`){
        msg.channel.send('k. https://discord.com/api/oauth2/authorize?client_id=837696567947165706&permissions=8&scope=bot');
        console.log(`someone wants to add siri to their server`)
    }

    //register

    if(msg.content === `${prefix} register`){

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

        msg.channel.send(RegisteredEmbed)
    }

    //captcha xd
    
    if(msg.content === `${prefix} are you a robot?`){
        msg.channel.send(`no, i'm not`)
    }

    //rules for da server

    if(msg.content === `${prefix} rules`){

        //construct embed

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

        msg.channel.send(RulesEmbed)
        
    }
    
}),

bot.login(token);