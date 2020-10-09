import { CommandRouter } from "../common/commands/command-router";
import { AppDataServices } from "../services/app.services";
import { ServersRouter } from "./servers/servers-router";

export class CommandsRouter extends CommandRouter {
    constructor(public services: AppDataServices)
    {
        super()
        this.initRoutes()
    }

    initRoutes() {
        var serversRouter = new ServersRouter(this.services.serversService)

        this.addRoute("servers", serversRouter)
    }
}