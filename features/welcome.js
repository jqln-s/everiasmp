import { EmbedBuilder, Events } from 'discord.js'

export default async (client) => {
    client.on(Events.GuildMemberAdd, async (member) => {
        const channel = await client.channels.fetch('1321209314840416306');

        if (Date.now() - member.user.createdAt < 24 * 60 * 60 * 1000) {
            try {
                member.user.send('You have been kicked because your account is less than a day old.');
                await member.kick({ reason: 'New account' });
            } catch (error) {
                console.error('Unable to kick user:', error);
            }
            return;
        }

        const embed = new EmbedBuilder()
            .setColor(0x2b2d31)
            .setTitle('**Welcome *!*   ⋆ ｡˚ ⋆**')
            .setDescription('ㅤ\n' +
                            '**Join our smp** <:Everia_Sparkles:1322328148624412792>\n' +
                            'IP: play.everiasmp.com\n' +
                            'Port: 25565\n\n' +
                            '**Essential Channels:**\n' +
                            '<:Everia_Dot:1322411330774241340> <#1321209314840416303>\n' +
                            '<:Everia_PinkDot:1322411242756898826> <#1321209314840416304>\n' +
                            '<:Everia_Dot:1322411330774241340> <#1321209315197190195>')
            .setThumbnail('https://i.imgur.com/PmWYbWO.png')
            .setFooter({ text: 'Thank you for joining Everia!' })

        channel.send({
            content: `<@${member.user.id}> verify in <#1321209314840416304> *!*`,
            embeds: [embed]
        });
    });
}