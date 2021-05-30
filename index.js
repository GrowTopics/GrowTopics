const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = ".."

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    
    bot.channels.cache.get('848030787889528832').send(`I have restarted!`)
    bot.channels.cache.get('848662028343836682').send(`No errors, I have restarted!`)
    
    bot.user.setActivity(`..help In ${bot.guilds.cache.size} Servers!`, {
        type: "WATCHING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

}
)

bot.on("guildCreate", guild => {
bot.user.setActivity(`..help In ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });
})

bot.on("guildDelete", guild => {
bot.user.setActivity(`..help In ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });
})



// THIS IS THE bot.login

bot.login(process.env.token);
