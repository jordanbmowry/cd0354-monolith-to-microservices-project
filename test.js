require('dotenv').config(); // Ensure .env is loaded

const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Connection error', err.stack))
  .finally(() => client.end());
