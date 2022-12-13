require("dotenv").config();

const env = process.env;
module.exports = {
    PORT: env.PORT,
    JWT_SECRETE: env.JWT_SECRETE,
    JWT_REFRESH_SECRETE: env.JWT_REFRESH_SECRETE
};