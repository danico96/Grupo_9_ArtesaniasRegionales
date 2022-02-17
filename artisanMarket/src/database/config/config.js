const env = process.env;

module.exports = {
  "development": {
    "username": 'franAdmin',
    "password": 'Adrian12234..',
    "database": 'artisanMarket',
    "host": '45.79.201.214',
    "dialect": 'mysql',
    "port": '3306',
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
