const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "Info",
  description: "Returns latency and API ping",
  async execute(client, message, args) {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`🏓- ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
}