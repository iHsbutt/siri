//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('./config.json').prefix)
const token = (require('./config.json').token)
const fs = require('fs');
bot.commands = new Discord.Collection();
let targetChannelId = 'logs842642624640188419';

bot.on(`ready`, () =>{
    console.log(`ok ready`)

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

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}

bot.on(`message`, message =>{

    console.log(`${message.author.tag} said ${message.content}`)
    
    if(message.author.bot) return; // do nothing
    // if not responding to a bot, do bot stuff
    const logs = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.tag} with an id of ${message.author.id} in channel ${message.channel.name} in server ${message.guild.name} sent`)
    .setDescription(`${message.content}`)
    bot.channels.cache.find(channel => channel.name === targetChannelId).send(logs); // for discord v12
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    
    if(command === 'test'){
        bot.commands.get(`test`).execute(message, args);
    }

    if(command === 'who are you'){
        bot.commands.get(`whois`).execute(message, args)
    };

    if(command === `register`){
        bot.commands.get(`register`).execute(message, args)
    }

    if(command === `rules`){
        bot.commands.get(`rules`).execute(message, args)
    }

    if(command === `github link`){
        message.channel.send(`https://github.com/iHsbutt/siri`)
    }

    if (message.mentions.users.has(bot.user.id) && !message.author.bot) {
        bot.commands.get(`ping`).execute(message, args)
    }

    if(command === `help`){
        bot.commands.get(`help`).execute(message, args)
    }

})

bot.login(token);