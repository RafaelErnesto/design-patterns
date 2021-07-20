import { DatabaseServerInterface } from "../contracts/DatabaseServerInterface";

export class PostgresServer implements DatabaseServerInterface {
    connect(url: string): string {
        return 'connection to postgres'
    }
    disconnect(): void {
        console.log('connection to postgres closed')
    }
    
}