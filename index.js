const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS"
    ]
})

client.on("ready", () => {
    console.log(`Bot ${client.user.tag} is online!`)
})

client.on('messageCreate', async message => {
    if (message.content.includes("lidl") ){
        await message.react("<:Lidl:936219718694625300>")
    }
})

client.on('messageCreate', async message => {
    if (message.content.includes("lvo") ){
        await message.react("<:sheeshVO:870554241079586877>")
    }
})

client.login(process.env.TOKEN)