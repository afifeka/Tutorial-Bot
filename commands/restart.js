const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== '401327121580032000') return message.channel.send("Invalid Permission.");
          
	let restard = new Discord.RichEmbed()
	.addField("Restarting Bot/Reboot", "Reconeccting....")
	.setColor("RED")
	.setFooter("Command Only For My Owner")
	message.channel.send(restard);
	
	return process.exit(103)
}

module.exports.help = {
  name: "restart"
}
    
