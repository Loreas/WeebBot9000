const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
	let user = message.member.displayName;
	if(!bot.creatingteam){
		message.channel.send("there has no competitive team been started.")
	}
	//count for how many there are
	if(bot.full === 5){
		message.channel.send("Sorry, we are currently full! I'll put you on reserve!")
		bot.reserve.push(user);
	}
	else{
		bot.team.push(user);
		if(bot.full === 4){
			message.channel.send(`A team has been assembled!`)
			let embed = new Discord.RichEmbed()
				.setAuthor(user)
				.setDescription("Team SOAP COMP CSGO")
				.setColor("	#0000FF");
				bot.team.forEach((p,i) => {
					embed.addField(`Player ${i}: `, p)
				});
			bot.creatingteam = false;
			bot.team = [
			;
			message.channel.send({embed: embed});

		}
		else{
			message.channel.send(`You have been added to the team`);
		}
	}

}

module.exports.help = {
	name: "comp"
}