import { CommandRoute } from "./command-route";
import { Command } from './command'
import { chmod } from "fs";
import { Message } from "discord.js";

export abstract class CommandRouter {
    private children: Map<string, CommandRouter | ((msg: Message) => void)>

    abstract initRoutes();

    constructor() {
        this.children = new Map<string, CommandRouter | ((msg: Message) => void)>()
    }

    addRoute(key: string, dest: CommandRouter | ((msg: Message) => void)) {
        this.children.set(key, dest);
        console.log(this.children)
    }

    executeCommand(command: Command) {
        if(command.cmd.length > 0)
        {
            var cmd = command.splice();
            if(cmd != "" && cmd != null)
            {
                var dest = this.children.get(cmd);
                if(dest != undefined)
                {
                    if(dest instanceof CommandRouter)
                    {
                        dest.executeCommand(command)
                    }
                    else
                    {
                        dest(command.msg)
                    }
                }
            }
            else
            {
                this.executeCommand(command)
            }
        }
    }
}