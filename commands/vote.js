export default {
    data: {
        name: ['vote'],
        deleteMessage: true
    },
    execute (message) {
        message.channel.send('Our voting links can be found here: <a:v_Sparkles:1321700445621719090>\n' +
                             '- https://minecraftservers.org/vote/670727\n' +
                             '-https://minecraft-server-list.com/server/509876/vote/');
    }
}
