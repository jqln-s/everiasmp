import { Events, PermissionFlagsBits } from 'discord.js'

export default (client) => {
    client.on(Events.MessageCreate, (message) => {
        if (message.channel.id === '1326982526174236825' &&
            !message.author.bot &&
            !message.member.permissions.has(PermissionFlagsBits.Administrator)
        ) {
            message.delete();
            message.member.timeout(15 * 60 * 1000, 'Talked in FAQ channel');
        }
    });
}