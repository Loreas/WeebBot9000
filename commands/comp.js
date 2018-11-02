const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {
    message.channel.send("Who is ready for some comp? @everyone");
    console.log("response was sent");
}

module.exports.help = {
	name: "comp"
}