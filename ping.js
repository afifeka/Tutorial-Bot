const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let start = Date.now(); message.channel.send(':ping_pong:').then(message => { 
      message.delete();
        let diff = (Date.now() - start); 
        let API = (bot.ping).toFixed(2)
        let embed = new Discord.RichEmbed()
        .setTitle(`:ping_pong: Pong!`)
        .setColor(`RANDOM`)
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        message.channel.send(embed);
    });
}

module.exports.help = {
  name: "pingpong"
}
