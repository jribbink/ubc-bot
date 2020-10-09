import { CommandController } from '../../common/commands/command-controller'
import { ServersService } from '../../services';

export class ServersController extends CommandController {
    constructor(public serversService: ServersService) {
        super()
    }
    
    test() {
        console.log("holy shit im a good coder")
    }
}