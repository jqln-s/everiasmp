import { Events, PermissionFlagsBits } from "discord.js";

export default {
    data: {
        name: ['testwelcome'],
        deleteMessage: true,
        permission: PermissionFlagsBits.Administrator
    },
    execute (message) {
        message.client.emit(Events.GuildMemberAdd, message.member);
    }
}