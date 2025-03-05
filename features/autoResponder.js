import { Events } from 'discord.js'

export default (client) => {
    client.on(Events.MessageCreate, (message) => {
        const reactions = [
            "1322766476414816404",
            "1323012988801777715",
            "1345898639708393562",
            "1321700216998461540",
            "1321700179337805875",
            "1321699433989275761",
            "1323012659259641877",
            "1322419573374451844",
            "1322707988850409542",
            "1321713693708390400",
            "1345898691793387540",
            "1321699188001603584",
            "1345898698298884258",
            "1322707597744144430",
            "1322765886536421456",
            "1322707156696432690",
            "1322707653834838149",
            "1322418072153231472"
        ]

        if (message.channel.id === "1321209315197190202") {
            message.react("1322707653834838149");
        } else if (message.channel.id === "1321213632507285524") {
            const result = [];
            const temp = [...reactions];

            for (let i = 0; i < 5; i++) {
                const index = Math.floor(Math.random() * temp.length);
                result[i] = temp.splice(index, 1)[0];
            }

            for (const reaction of result) {
                message.react(reaction);
            }
        }
    });
}