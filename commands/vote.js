export default {
    data: {
        name: ['vote'],
        deleteMessage: true
    },
    execute (message) {
        message.channel.send('Our voting links can be found here: <a:v_Sparkles:1321700445621719090>\n' +
                             '- meow\n' +
                             '- meow\n' +
                             '- meow');
    }
}