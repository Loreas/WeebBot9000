const fs = module.require("fs");
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
	let user = message.author.username;
	if(!bot.creatingteam){
		message.channel.send("there has no competitive team been started.")
	}
	//count for how many there are
	if(bot.full === 5){
		message.channel.send("Sorry, we are currently full! I'll put you on reserve!")
		bot.reserve.push(user);
	}

	//adduser to json
	bot.team[message.author.username] = {
    	function: "starting"
    }
    fs.writeFile("./commands/team.json", JSON.stringify(bot.team, null, 4), err => {
    	if(err) throw err;
    	message.channel.send(``)
    });

}

module.exports.help = {
	name: "comp"
}