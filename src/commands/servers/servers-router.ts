import { CommandRouter } from "../../common/commands/command-router";
import { ServersService } from "../../services";
import { ServersController } from "./servers-controller";

export class ServersRouter extends CommandRouter {
    constructor(public serversService: ServersService) {
        super()
        this.initRoutes()
    }

    initRoutes() {
        var serversController = new ServersController(this.serversService)

        this.addRoute("test", serversController.test)
    }
}