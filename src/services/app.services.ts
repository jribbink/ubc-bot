import { ServersService } from '../services'

export class AppDataServices {
    public serversService: ServersService

    constructor() {
        this.serversService = new ServersService()
    }
}