import { Events } from 'discord.js';

export default (client) => {
    client.on(Events.MessageCreate, (message) => {
        if (message.channel.id !== '1321209315427880966' || message.author.id !== '302050872383242240') return;

        setTimeout(() => {
            const bumpChannel = client.channels.cache.get('1321209315427880966');
            bumpChannel.send('<@&1321209314840416297>').then((msg) => {
            msg.delete();
        });
        }, 2 * 60 * 60 * 1000);
    });
}
