module.exports = {
    createSingleResponse: (response) => {
        return { message: response };
    },
    removeUndefined: ({ object }) => {
        Object.keys(object).forEach(key => {
            if (object[key] === undefined) {
                delete object[key];
            }
        });
        return object;
    }
};