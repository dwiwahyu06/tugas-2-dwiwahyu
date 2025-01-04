import pg from "pg"

const {Pool} = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "yogadwi2206",
    port: 5432,
});

console.log("Database Connected");

export default pool;