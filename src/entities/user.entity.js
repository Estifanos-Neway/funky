const jwt = require("jsonwebtoken");
const utils = require("../commons/utils");
const env = require("../env");

module.exports = class User {
    // types
    static #types = Object.freeze({
        Admin: "Admin",
        Creator: "Creator"
    });
    static get types() {
        return User.#types;
    }

    // id
    id;

    // type
    #type;
    set type(type) {
        this.#type = User.#types[type];
    }
    get type() {
        return this.#type;
    }

    constructor({ id, type }) {
        this.id = id;
        this.type = type;
    }

    toJson() {
        return utils.removeUndefined({
            object: {
                id: this.id,
                type: this.type
            }
        });
    }

    createAccessToken() {
        // @ts-ignore
        return jwt.sign(this.toJson(), env.JWT_SECRETE, { expiresIn: "10m" });
    }

    createRefreshToken() {
        // @ts-ignore
        return jwt.sign(this.toJson(), env.JWT_REFRESH_SECRETE);
    }

    static fromAccessToken({ accessToken, ignoreExpiration = false }) {
        // @ts-ignore
        const userJson = jwt.verify(accessToken, env.JWT_SECRETE, { ignoreExpiration });
        // @ts-ignore
        return new User(userJson);
    }

    static fromRefreshToken(refreshToken) {
        // @ts-ignore
        const userJson = jwt.verify(refreshToken, env.JWT_REFRESH_SECRETE);
        // @ts-ignore
        return new User(userJson);
    }

    static isValidId(id) {
        return utils.isValidDbId(id);
    }
};