export default {
    data: {
        name: ['store', 'shop'],
        deleteMessage: true
    },
    execute (message) {
        message.channel.send('Our store is **https://store.everiasmp.com**!\n' +
                             'Enjoy your shopping! <a:v_Sparkles:1321700445621719090>');
    }
}