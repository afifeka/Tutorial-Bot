const Discord = require("discord.js");

module.exports.run = async (bot, message, args, color, prefix) => {
    if (message.author.id !== '383600553537699840' && message.author.id !== '428402923144216576') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor(color)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
    name: 'eval',
    aliases: ['ev'],
    description: 'only my onwer can use this command',
    usage: '_eval [some javascript code]'
}
