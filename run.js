// requirements
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
// const
const prefix = config.prefix;
const bot = new Discord.Client();

// bot members
bot.config = config;
bot.commands = new Discord.Collection();

//bot members for comp commands
bot.team = [];
bot.creatingteam = false;
bot.full = 0;
bot.reserves = [];

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
    console.log(`Got command ${i + 1}`);
    console.log(props);

  });
});

bot.on("ready", () =>{
    console.log(`bot is ready for action! ${bot.user.username}`);
    console.log(bot.commands)
})

bot.on("message", async message =>{
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    console.log(messageArray);
    console.log(command);
    console.log(args);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length)+".js");
    console.log(command.slice(prefix.length));
    if(cmd != undefined){ 
       
        cmd.run(bot, message, args)
    };
  
})

bot.login(config.token);