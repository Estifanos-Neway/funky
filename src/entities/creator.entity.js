const utils = require("../commons/utils");

module.exports = class Creator {
    id;
    username;
    full_name;
    password_hash;
    member_since;

    constructor({ id, username, full_name, password_hash, member_since }) {
        this.id = id;
        this.username = username;
        this.full_name = full_name;
        this.password_hash = password_hash;
        this.member_since = member_since;
    }

    toJson() {
        return utils.removeUndefined({
            object: {
                id: this.id,
                username: this.username,
                full_name: this.full_name,
                password_hash: this.password_hash,
                member_since: this.member_since
            }
        });
    }
};