const { Pool } = require("pg");
const connectionString =
    "postgresql://postgres:postgres@localhost:5432/postgres";
const pool = new Pool({ connectionString });

class Postgres {
    async init() {
        this.client = await pool.connect();
    }

    async execute(query, params = []) {
        console.log(query);
        return (await this.client.query(query, params)).rows;
    }

    release() {
        this.client.release(true);
    }
}

const getClient = async () => {
    const postgres = new Postgres();
    await postgres.init();
    return postgres;
};

module.exports = getClient;
