const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
	let user = message.author.username;
	if(bot.creatingteam){
		message.channel.send(`there is already a team started`);
		return;
	}
    message.channel.send(`Who is ready for some comp? @everyone (type ${bot.config.prefix}me to be included)`);
    bot.team.push(user);
    
    message.channel.send(`Team created and ${message.author.username} is captain`);
    bot.creatingteam = true;
    bot.full += 1;
}

module.exports.help = {
	name: "comp"
}