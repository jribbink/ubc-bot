import { apiToken } from './api-config'

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Logged in as: " + client.user.username)
})

function makeChannel(message, name){
    var server = message.guild;

    server.channels.create(name,{type:"text"});
}

var quiz: any = [];

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    if(receivedMessage.content.startsWith("->"))
    {
        var cmd = receivedMessage.content.substr(3).split(" ");
        switch(cmd[0])
        {
            case 'quiz':
                switch(cmd[1])
                {
                    case 'reset':
                        quiz = []
                        receivedMessage.channel.send("Quiz answers: " + quiz.join())
                        break;
                    case 'push':
                        quiz.push(cmd[2] as string)
                        receivedMessage.channel.send("Quiz answers: " + quiz.join())
                        break;
                }
                break;
            case 'channel':
                if(receivedMessage.author == "222857317094260740")
                {
                    switch(cmd[1])
                    {
                        case 'add':
                            makeChannel(receivedMessage, cmd[2])
                            break;
                        case 'remove':
                            receivedMessage.channel.delete()
                            break;
                    }

                    receivedMessage.channel.send("Yes master.")
                }
                else
                {
                    receivedMessage.channel.send("Naw, you aint Jordan.")
                }
                break;
            case 'invite':
                receivedMessage.channel.send("https://discord.com/api/oauth2/authorize?client_id=762802075897561088&permissions=8&scope=bot")
                break;
            case 'github':
                receivedMessage.channel.send("https://github.com/jribbink/ubc-bot")
                break;
        }
    }

    console.log("[" + receivedMessage.author + "] " + receivedMessage.content)
})

client.login(apiToken)