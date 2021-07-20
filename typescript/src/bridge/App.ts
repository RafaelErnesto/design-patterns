import { Service } from "./database-services/Service"
import { MysqlServer } from "./servers/MysqlServer"
import { PostgresServer } from "./servers/PostgresServer"

(() => {
    const mysqlService = new Service(new MysqlServer())
    mysqlService.connectToDatabase()
    mysqlService.closeDatabaseConnection()

    const postgresService = new Service(new PostgresServer())
    postgresService.connectToDatabase()
    postgresService.closeDatabaseConnection()
})()