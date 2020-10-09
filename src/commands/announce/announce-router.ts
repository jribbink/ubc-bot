import { CommandRouter } from '../../common/commands/command-router'

export class AnnounceRouter extends CommandRouter {
    constructor() {
        super()
        this.initRoutes()
    }

    initRoutes() {
        this.addRoute("new", msg => {
            msg.channel.send("Hey guys, you should check me out!  I now have a nice, clean MVC structure and it should be very easy to scaffold what's existing.")
        })
    }
}