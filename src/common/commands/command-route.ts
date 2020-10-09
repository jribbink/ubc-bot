import { CommandRouter } from "./command-router";

export class CommandRoute {
    constructor(public dest: CommandRouter | (() => void))
    {

    }
}