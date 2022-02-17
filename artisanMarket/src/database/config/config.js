const env = process.env;

module.exports = {
  "development": {
		username: env.DB_USER,
		password: env.DB_PASSWORD,
		database: env.DB_NAME,
		host: env.DB_HOST,
		dialect: 'mysql',
		port: env.DB_PORT,
  },
  "test": {
		username: env.DB_USER,
		password: env.DB_PASSWORD,
		database: env.DB_NAME,
		host: env.DB_HOST,
		dialect: 'mysql',
		port: env.DB_PORT,
  },
  "production": {
		username: env.DB_USER,
		password: env.DB_PASSWORD,
		database: env.DB_NAME,
		host: env.DB_HOST,
		dialect: 'mysql',
		port: env.DB_PORT,
  }
}
