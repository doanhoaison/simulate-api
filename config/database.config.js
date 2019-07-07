const CONFIG = require("./config");

module.exports = {
  development: {
    username: CONFIG.db_user,
    password: CONFIG.db_password,
    database: CONFIG.db_name,
    host: CONFIG.db_host,
    port: CONFIG.db_port,
    dialect: CONFIG.db_dialect,
    // operatorsAliases: false,
    // define: {
    //   underscored: true,
    //   charset: "utf8mb4",
    //   dialectOptions: {
    //     collate: "utf8mb4_unicode_ci"
    //   }
    // }
  }
};
