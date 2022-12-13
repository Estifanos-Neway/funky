const flat = require("flat");
const { creators } = require("./data");

module.exports = {
    findMany: () => creators,
    findById: ({ id }) => creators.find(creator => creator.id == id),
    exists: ({ conditions }) => {
        for (const creator of creators) {
            const flattenCreator = flat(creator);
            let valid = true;
            for (const [key, value] of Object.entries(conditions)) {
                if (flattenCreator[key] !== value) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                return creator;
            }
        }
        return false;
    }
};