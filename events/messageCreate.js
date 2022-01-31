const Discord = require("discord.js")
const { owners } = require("..")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const {client, prefix} = bot

        //react with lidl emoji when "lidl" is said
        if (message.content.includes("lidl") ){
            await message.react("<:Lidl:936219718694625300>")
        }
        
        //react with lvo emoji when "lvo" is said
        if (message.content.includes("lvo") ){
            await message.react("<:sheeshVO:870554241079586877>")
        }

        if (message.content.includes("/vote") ){
            await message.react("👍")
        }

        if (message.content.includes("/vote") ){
            await message.react("👎")
        }

        if (!message.guild) return

        if (message.author.bot) return

        if (!message.content.startsWith(prefix))
            return

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) return

        let member = message.member

        if (command.devOnly && !owners.includes(member.id)){
            return message.reply("This command is only available to the cool people")
        }

        if (command.permissions && member.permissions.missing(command.permissions).length !== 0){
            return message.reply("You are not swag enough to use this command")
        }

        try {
            await command.run({...bot, message, args})
        }
        catch (err) {
            let errMsg = err.toString()

            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }
            else
                console.error(err)
        }

    }
}