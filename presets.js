// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed)

const exampleEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Rules')
.addFields(
	{ name: '\u200B', value: '\u200B' },
	{ name: 'Rule 1', value: 'no NSFW', inline: true },
	{ name: 'Rule 2', value: 'do not beg for money', inline: true },
)
.addFields(
	{ name: 'Rule 3', value: 'if a staff member tells you to stop, stop', inline: true },
	{ name: 'Rule 4', value: 'do not be toxic', inline: true },
)


//NOT WORKING BRUH

client.on('message', message => {
	if (message.content === '!react-custom') {
		message.react(':siri:837631479592910900');
	}
});
