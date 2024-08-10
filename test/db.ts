export const dbConfig = {
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    host: '0.0.0.0',
    port: 5432,
}

export const connectionString = `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
