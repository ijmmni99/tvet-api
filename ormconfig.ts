import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

require('dotenv').config();

const config: SqlServerConnectionOptions  = {
    type: process.env.TYPEORM_CONNECTION as "mssql",
    host: String(process.env.TYPEORM_HOST),
    port: parseInt(process.env.TYPEORM_PORT,10),
    database: String(process.env.TYPEORM_DATABASE),
    username: String(process.env.TYPEORM_USERNAME),
    password: String(process.env.TYPEORM_PASSWORD),
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: false,
    options: {
        encrypt: false,
        enableArithAbort: true,
      },
    migrations: [
        process.env.TYPEORM_MIGRATIONS
    ],
    cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
    }

}

export default config;