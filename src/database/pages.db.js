const { pages } = require("./data");
const flat = require("flat");
module.exports = {
    findMany: ({ conditions = {} }) => {
        return pages.filter(page => {
            const flattenPage = flat(page);
            let valid = true;
            for (const [key, value] of Object.entries(conditions)) {
                if (flattenPage[key] !== value) {
                    valid = false;
                    break;
                }
            }
            return valid;
        });
    },
    findById: ({ id }) => pages.find((page) => page.id == id)
};