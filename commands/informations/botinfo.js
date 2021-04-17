
const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")




module.exports = {
    name: "botinfo",
    category: "Info",
  description: "Sends detailed info about the client",
  usage: "[command]",
  async execute(client, message, args) {
  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setAuthor(client.user.username)
          .setTitle("__**Stats:**__")
          .setColor("RANDOM")
          .addField("⏳ Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
          .addField("⌚️ Uptime ", `${duration}`, true)
          .addField("<:Users:831435727736537090> Users", `${client.users.cache.size}`, true)
          .addField("📁 Servers", `${client.guilds.cache.size}`, true)
          .addField("<:DE_IconBot:831659498136666132> Commands ", `${client.commands.size}`, true)
          .addField("<:channel:831435913829154827> Channels ", `${client.channels.cache.size}`, true)
          .addField("<:djs:831434209721319444> Discord.js", `v${version}`, true)
          .addField("<:NodeOnline:831435119218786304> Node", `${process.version}`, true)
          .addField("<:CPU:831434685161930794> CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("<:CPU:831434685161930794> CPU usage", `\`${percent.toFixed(2)}%\``, true)
          .addField("🤖 Arch", `\`${os.arch()}\``, true)
          .addField("💻 Platform", `${os.platform()}`, true)
          .addField("🏓 API Latency", `${(client.ws.ping)}ms`)  
      message.channel.send(botinfo)
  });
  }
  };