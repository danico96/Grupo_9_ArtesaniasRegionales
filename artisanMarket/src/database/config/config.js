const env = process.env;

module.exports = {
  "development": {
    "username": 'root',
    "password": '1234',
    "database": 'artisanMarket',
    "host": '127.0.0.1',
    "dialect": 'mysql',
    "port": '3307',
  },
  "test": {
    "username": env.DB_USER,
    "password": env.DB_PASSWORD,
    "database": env.DB_NAME,
    "host": env.DB_HOST,
    "dialect": env.DB_DIALECT,
    "port": env.DB_PORT,
  },
  "production": {
    "username": env.DB_USER,
    "password": env.DB_PASSWORD,
    "database": env.DB_NAME,
    "host": env.DB_HOST,
    "dialect": "mysql",
    "port": env.DB_PORT,
  }
}
