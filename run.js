const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = config.prefix;
const bot = new Discord.Client();
bot.config = config;
bot.commands = new Discord.Collection();

if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }
  console.log("Getting commands");

  jsfiles.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    bot.commands.set(f, props);

  });
});

bot.on("ready", () =>{
    console.log(`bot is ready for action! ${bot.user.username}`);
    console.log(bot.commands)
})

bot.on("message", async message =>{
    console.log("i got the message!")
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    console.log(messageArray);
    console.log(command);
    console.log(args);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    console.log(command.slice(prefix.length));
    if(cmd != null){ 
        console.log("do i get here?")
        cmd.run(bot, message, args)
    };
    console.log("did i do it?")
})

bot.login(config.token);