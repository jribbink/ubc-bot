import { Message } from "discord.js";

export class Command {
    public cmd: string[]
    public msg: Message

    constructor(message: Message) {
        var str = message.content.substr(2)
        this.cmd = str.split(" ")
        this.msg = message
    }

    splice(): string {
        var ret = this.cmd[0]
        this.cmd = this.cmd.splice(1);
        return ret
    }
}