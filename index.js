//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('./config.json').prefix)
const logsChannel = (require('./config.json').prefix)
const token = (require('./config.json').token)

//she alive poggers

bot.on('ready', () => {
    console.log(`siri logged in poggers`)
    bot.user.setActivity(`to ${bot.guilds.cache.size - 1} servers`, ({type: "LISTENING"}))
})

//when it joins

bot.on("guildCreate", guild => {
    const channels = guild.channels.cache.filter(channel => channel.type == "text");

    const helo = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`thank you for inviting me!`)
        .setDescription(`we will need to do some setup first.`)
        .addField(`fun with siri`, `say hey siri`, true)
        .addField(`register and get a private channel`, `say ${prefix} register`, true)
        .addField(`join a discord server with siri logs`, `say ${prefix} logs server`, true)
        .addField(`we have more commands`, `say ${prefix} help`, true)

    channels.first().send(helo).catch(e => console.log(e));
});

//commands

bot.on('message', message =>{

    //this MUST be on the top

    let msg = message;
    
    console.log(`${message.author.tag} said ${message.content}`)
    
        if(message.author.bot) return; // do nothing
        // if not responding to a bot, do bot stuff
        const logs = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.tag} with an id of ${message.author.id} in channel ${message.channel.name} in server ${message.guild.name} sent`)
        .setDescription(`${message.content}`)
        bot.channels.cache.find(channel => channel.name === logsChannel).send(logs); // for discord v12
    
    //hi
    
    if(msg.content === 'hey siri'){
        msg.channel.send(`hi ${message.author.username}`)
        console.log(`someone said hey siri`)
    }

    //the

    if(msg.content === `${prefix} logs server`){
        msg.channel.send(`https://discord.gg/qUzpTuAmeH`)
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
	    { name: 'who is siri', value: 'a dumb bot made by iH and Puffercat', inline: true },
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
    
    if(msg.content === `hello`){
        msg.channel.send(`bye`)
    }

    if(msg.content === `shut up`){
        msg.channel.send(`why would i?`)
    }

    if(msg.content === `fuck you siri`){

        const NoUEmbed = new Discord.MessageEmbed()
        .setTitle('no u')
        .setDescription('no u')
        .addField('no u', 'no u', true)
        .setImage('https://cdn.discordapp.com/attachments/837737014778134550/840205733239717898/iu.png')

        msg.channel.send(NoUEmbed)
    }

    if(msg.content === `${prefix} give me the github link`){
        msg.channel.send(`https://github.com/iHsbutt/siri`)
    }

    //ping

    if (message.mentions.users.has(bot.user.id) && !message.author.bot) {
        console.log(`someone pinged siri`)
        const GotPingedWTF = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('why did you ping me?')
        .setDescription(`my prefix is ${prefix}.`)
        msg.channel.send(GotPingedWTF)
    }

        //random messages test

        
        

        if(msg.content === `${prefix} help`){
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
            msg.channel.send(helpEmbed)
        }
            
            module.exports = {
                name: 'random',
                description: 'random?',
                execute(message, args){
                    // Now the randomMessage will be recalculated every time the command is run
                    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                    message.channel.send(randomMessage);
                }
            }
        }
),

bot.login(token);