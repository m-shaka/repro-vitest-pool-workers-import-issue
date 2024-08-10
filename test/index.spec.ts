import { describe, it, expect } from 'vitest';
import postgres from 'postgres';
import { connectionString } from './db';

describe('DB connection', () => {
	it('should be successful', async () => {
		const sql = postgres(connectionString);
		const result = await sql`SELECT * from pg_database`;
		expect(result).toBeDefined();
	});
});
