const jwt = require("jsonwebtoken");
const env = require("../env");

module.exports = {
    jwtSign: ({ payload, expiresIn = "10m" }) => {
        // @ts-ignore
        return jwt.sign(payload, env.JWT_SECRETE, { expiresIn });
    },
    jwtVerify: ({ token, ignoreExpiration = false }) => {
        // @ts-ignore
        return jwt.verify(token, env.JWT_SECRETE, { ignoreExpiration });
    },
    jwtSignRefresh: ({ payload }) => {
        // @ts-ignore
        return jwt.sign(payload, env.JWT_REFRESH_SECRETE);
    },
    jwtVerifyRefresh: ({ token }) => {
        // @ts-ignore
        return jwt.verify(token, env.JWT_REFRESH_SECRETE, { ignoreExpiration: true });
    },
};