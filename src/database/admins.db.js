const flat = require("flat");
const { admins } = require("./data");

module.exports = {
    exists: ({ conditions }) => {
        for (const admin of admins) {
            const flattenAdmin = flat(admin);
            let valid = true;
            for (const [key, value] of Object.entries(conditions)) {
                if (flattenAdmin[key] !== value) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                return true;
            }
        }
        return false;
    }
};