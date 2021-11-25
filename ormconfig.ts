import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

const config: SqlServerConnectionOptions  = {
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    database: 'tvet',
    username: 'nyz',
    password: 'nyz123',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    options: {
        encrypt: false,
        enableArithAbort: true,
      },
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    }

}

export default config;