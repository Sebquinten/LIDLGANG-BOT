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

const welcomeChannelId = "936641026532188170"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to LIDLGANG!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)