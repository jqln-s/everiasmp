import { EmbedBuilder } from 'discord.js';

export default {
    data: {
        name: ['join'],
        deleteMessage: true
    },
    execute (message) {
        const java = new EmbedBuilder()
            .setColor(0x2b2d31)
            .setTitle('How to Join Everia on **Java Edition** ⋆ ｡˚ ⋆')
            .setDescription('<:f_everiadot:1322411330774241340> Open the Minecraft launcher and select **Java Edition**.\n' + 
                            '<:g_everiadot:1322411242756898826> Set the installation version to `1.21.3` and click **Play**.\n' + 
                            '<:f_everiadot:1322411330774241340> Click **Multiplayer** on the main menu.\n' + 
                            '<:g_everiadot:1322411242756898826> Click **Add Server**.\n' + 
                            '<:f_everiadot:1322411330774241340> Type `play.everiasmp.com` in the **Server Address** field and click **Done**.\n' + 
                            '<:g_everiadot:1322411242756898826> Click **Join Server** to join the SMP!')
            .setImage('https://i.imgur.com/8fD0ASX.png');

        const bedrock = new EmbedBuilder()
            .setColor(0x2b2d31)
            .setTitle('How to Join Everia on **Bedrock Edition** ⋆ ｡˚ ⋆')
            .setDescription('<:f_everiadot:1322411330774241340> Open the Minecraft app.\n' + 
                            '<:g_everiadot:1322411242756898826> Click **Play** on the main menu.\n' + 
                            '<:f_everiadot:1322411330774241340> Click the **Servers** tab at the top right.\n' + 
                            '<:g_everiadot:1322411242756898826> Scroll to the bottom of the screen and click **Add Server**.\n' + 
                            '<:f_everiadot:1322411330774241340> Type `play.everiasmp.com` in the **Server Address** field.\n' + 
                            '<:g_everiadot:1322411242756898826> Type `25565` in the **Port** field.\n' + 
                            '<:f_everiadot:1322411330774241340> Click **Play** to join the SMP!')
            .setImage('https://i.imgur.com/8fD0ASX.png');

        message.channel.send({ embeds: [java, bedrock] });
    }
}
