import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

async function connect(){
    
    if(global.connection){
        return global.connection.connect();
    }    

    const psqlString = process.env.DB_PSQL;

    let pool;

    if (psqlString) {
        pool = new Pool({
            connectionString: process.env.DB_PSQL,
            ssl: {
                rejectUnauthorized: false,
            },            
        });
    } else {
        pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT
        });
    }   

    global.connection = pool;

    return pool.connect();
}

export { connect }