import { CommandRouter } from "../common/commands/command-router";
import { AppDataServices } from "../services/app.services";
import { ServersRouter } from "./servers/servers-router";
import { AnnounceRouter } from "./announce/announce-router"

export class CommandsRouter extends CommandRouter {
    constructor(public services: AppDataServices)
    {
        super()
        this.initRoutes()
    }

    initRoutes() {
        var serversRouter = new ServersRouter(this.services.serversService)
        var announceRouter = new AnnounceRouter()

        this.addRoute("servers", serversRouter)
        this.addRoute("announce", announceRouter)
    }
}