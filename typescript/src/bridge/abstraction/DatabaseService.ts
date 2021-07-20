import { DatabaseServerInterface } from "../contracts/DatabaseServerInterface";

export abstract class DatabaseService {
    databaseClient: DatabaseServerInterface

    constructor(databaseClient) {
        this.databaseClient = databaseClient
    }

    abstract connectToDatabase(): void

    abstract closeDatabaseConnection(): void
}