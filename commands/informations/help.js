const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Info',

    execute(client, message) {
        const categories = [];
        client.commands.forEach((command) => categories.includes(command.category) ? false : categories.push(command.category));

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle('Eren Yeager | Commands');
        embed.setThumbnail(client.user.avatarURL());
        embed.setDescription('These are the available commands for Eren Yeager. Need more help? Come join our [guild](https://discord.gg/w7nTqvQvxb)');
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));

        categories.map((category) => {
            const cmd = client.commands.filter((cmd) => cmd.category === category);

            embed.addField(category.charAt(0).toUpperCase() + category.slice(1), cmd.map((x) => '`' + x.name + '`').join(', '));
        });

        embed.setTimestamp();
        embed.setFooter('Eren Yeager');

        message.channel.send(embed);
    },
};