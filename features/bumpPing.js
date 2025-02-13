export default (client) => {
    setInterval(pingOwner, 1000 * 60 * 60 * 2);

    function pingOwner() {
        const bumpChannel = client.channels.cache.get('1321209315427880966');

        bumpChannel.send('<@&1321209314840416297>').then((msg) => {
            msg.delete();
        });
    }
}