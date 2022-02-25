import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

const config: SqlServerConnectionOptions  = {
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    database: 'dbtvet',
    username: 'dbCrew',
    password: 'DB(rew22',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    options: {
        enableArithAbort: true,
        encrypt: false
      },
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    },
}

// const config: SqlServerConnectionOptions  = {
//     type: 'mssql',
//     host: 'localhost',
//     port: 1433,
//     database: 'tvet',
//     username: 'nyz',
//     password: 'nyz123',
//     entities: ['dist/src/**/*.entity.js'],
//     synchronize: false,
//     options: {
//         enableArithAbort: true,
//         encrypt: false
//       },
//     migrations: [
//         'dist/src/db/migrations/*.js'
//     ],
//     cli: {
//         migrationsDir: 'src/db/migrations'
//     },
// }

// require('dotenv').config();

// const config: SqlServerConnectionOptions  = {
//     type: process.env.TYPEORM_CONNECTION as "mssql",
//     host: String(process.env.TYPEORM_HOST),
//     port: parseInt(process.env.TYPEORM_PORT,10),
//     database: String(process.env.TYPEORM_DATABASE),
//     username: String(process.env.TYPEORM_USERNAME),
//     password: String(process.env.TYPEORM_PASSWORD),
//     entities: [process.env.TYPEORM_ENTITIES],
//     synchronize: false,
//     options: {
//         encrypt: false,
//         enableArithAbort: true,
//       },
//     migrations: [
//         process.env.TYPEORM_MIGRATIONS
//     ],
//     cli: {
//         migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
//     }

// }

// TYPEORM_CONNECTION = mssql
// TYPEORM_HOST = localhost
// TYPEORM_USERNAME = nyz
// TYPEORM_PASSWORD = nyz123
// TYPEORM_DATABASE = tvet
// TYPEORM_PORT = 1433
// TYPEORM_SYNCHRONIZE = false
// TYPEORM_ENTITIES = dist/src/**/*.entity.js
// TYPEORM_MIGRATIONS = dist/src/db/migrations/*.js
// TYPEORM_MIGRATIONS_DIR = src/db/migrations

export default config;