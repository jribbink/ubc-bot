import { ServersService } from '../services'

export class AppDataServices {
    serversService: ServersService

    constructor() {
        this.serversService = new ServersService()
    }
}