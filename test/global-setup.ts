import { GenericContainer } from 'testcontainers'
import { dbConfig, connectionString } from './db'
import postgres from 'postgres'

export default async function setup() {
  const container = new GenericContainer('postgres:latest')
    .withExposedPorts({ container: 5432, host: dbConfig.port })
    .withEnvironment({
      POSTGRES_USER: dbConfig.user,
      POSTGRES_PASSWORD: dbConfig.password,
      POSTGRES_DB: dbConfig.database,
    })
  const startedContainer = await container.start()

  const sql = postgres(connectionString)
  console.log(await sql`SELECT datname from pg_database`)

  return () => startedContainer.stop()
}
