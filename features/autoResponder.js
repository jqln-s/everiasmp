import { Events } from 'discord.js'

export default (client) => {
    client.on(Events.MessageCreate, (message) => {
        if (message.channel.id === "1321209315197190202") {
            message.react("1322707653834838149");
        }
    });
}