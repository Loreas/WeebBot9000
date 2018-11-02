const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed();
	embed.setAuthor(message.author.username);
	embed.setDescription("User info:");
	embed.setColor("#9B59B6");
	embed.addfield("Created At", message.author.createdAt);
	message.channel.send({embed: embed});
	console.log("i dont get it")
}

module.exports.help = {
	name: "userinfo"
}