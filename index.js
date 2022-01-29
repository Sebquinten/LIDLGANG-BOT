const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: ">",
    owners: ["303433764028153858"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

// client.on('messageCreate', async message => {
//     if (message.content.includes("lidl") ){
//         await message.react("<:Lidl:936219718694625300>")
//     }
// })

// client.on('messageCreate', async message => {
//     if (message.content.includes("lvo") ){
//         await message.react("<:sheeshVO:870554241079586877>")
//     }
// })

const welcomeChannelId = "936644164261658634"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to LIDLGANG!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)