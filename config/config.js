require('dotenv').config();

let CONFIG = {};

//MYSQL
CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql'
CONFIG.db_host = process.env.DB_HOST || 'localhost'
CONFIG.db_port = process.env.DB_PORT || '3306'
CONFIG.db_user = process.env.DB_USER || 'root'
CONFIG.db_password = process.env.DB_PASSWORD || '1111'
CONFIG.db_name = process.env.DB_NAME || 'simulate'

module.exports = CONFIG;