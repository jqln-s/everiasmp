export default {
    data: {
        name: ['ip'],
        deleteMessage: true
    },
    execute (message) {
        message.channel.send('Our server ip is **play.everiasmp.com** and our port is **25565**!\n' +
                             'Come join the magic now! <a:v_Sparkles:1321700445621719090>');
    }
}