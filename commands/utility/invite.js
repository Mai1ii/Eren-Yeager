const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "Info",
  description: "INVITE Eren Yeager",
  async execute(client, message, args) {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Eren Yeager Invite Link`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=824829262322073648&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`Eren Yeager`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}