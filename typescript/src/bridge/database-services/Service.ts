import { DatabaseService } from "../abstraction/DatabaseService";
import { DatabaseServerInterface } from "../contracts/DatabaseServerInterface";

export class Service extends DatabaseService {

    constructor(server: DatabaseServerInterface) {
        super(server)        
    }

    connectToDatabase(): void {
        console.log('Connecting to the database...')
        console.log(this.databaseClient.connect('localhost'))
    }
    closeDatabaseConnection(): void {
        console.log('Disconnecting from the database...')
        this.databaseClient.disconnect()
    }
    
}