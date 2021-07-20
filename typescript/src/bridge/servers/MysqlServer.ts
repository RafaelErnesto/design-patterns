import { DatabaseServerInterface } from "../contracts/DatabaseServerInterface";

export class MysqlServer implements DatabaseServerInterface {
    connect(url: string): string {
        return 'connection to mysql';
    }
    disconnect(): void {
        console.log('connection to mysql closed')
    }
    
}