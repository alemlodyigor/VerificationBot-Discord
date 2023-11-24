require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMessageReactions,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildIntegrations,
  ],
});

client.on("ready", () => {
  console.log("Verification bot in online!");
});

client.on("messageCreate", async (message) => {
  if (message.content === "-getMessage") {
    const verifiedRole = message.guild.roles.cache.find(
      (role) => role.name === "Verified"
    );
    const unverifiedRole = message.guild.roles.cache.find(
      (role) => role.name === "Unverified"
    );

    const emoji = "✅";

    let message = await message.channel.send(
      "To get access to server react with ✅"
    );

    await message.react(emoji);
  }
});

client.login(process.env.TOKEN);
