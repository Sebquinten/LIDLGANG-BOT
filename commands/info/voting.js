module.exports = {
    name: "vote",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.react("👍"),
        message.react("👎")
    }
}