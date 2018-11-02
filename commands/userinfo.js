const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("User info:")
		.setColor("#9B59B6")
		.addfield("Created At", message.author.createdAt);
	message.channel.send({embed: embed});
	console.log("i dont get it")
}

module.exports.help = {
	name: "userinfo"
}