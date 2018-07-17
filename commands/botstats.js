const Discord = require("discord.js");
const cpu = process.cpuUsage().system / 1024 / 1024;
const used = process.memoryUsage().heapUsed / 1024 / 1024;

module.exports.run = async (bot, message, args) => {
    let uptimes = (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds.\n"

    let testembed = new Discord.RichEmbed()
    .setDescription("**STATS**")
    .setColor("YELLOW")
    .addField("Total Server", `${bot.guilds.size} Servers!`)
    .addField("Total Channels", `${bot.channels.size} Channels!`)
    .addField("Total Users", `${bot.users.size.toLocaleString()} Users!`)
    .addField("Library", "Discord.js")
    .addField("CPU Usage", `${Math.round(cpu * 100) / 100}%`, true)
    .addField("Memory Usage", `${Math.round(used * 100) / 100} MB`)
    .addField("Uptime", uptimes)
    .setFooter("SmileStats")

    message.channel.send(testembed);

}

module.exports.help = {
  name: "stats"
}
