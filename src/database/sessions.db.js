const { sessions } = require("./data");

module.exports = {
    findByRefreshToken: ({ refreshToken }) => sessions.find(session => session.refresh_token == refreshToken),
    add: ({ session }) => sessions.push(session.toJson())
};