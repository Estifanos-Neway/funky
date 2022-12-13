const _ = require("lodash");
const utils = require("../commons/utils");
const User = require("./user.entity");

module.exports = class Session {
    // user
    #user;
    set user(jsonUser) {
        this.#user = _.isPlainObject(jsonUser) ? new User(jsonUser) : undefined;
    }
    get user() {
        return this.#user?.toJson();
    }

    // refreshToken
    refreshToken;

    constructor({ user, refreshToken }) {
        this.user = user;
        this.refreshToken = refreshToken;
    }

    toJson() {
        return utils.removeUndefined({
            object: {
                user: this.user,
                refreshToken: this.refreshToken
            }
        });
    }
};