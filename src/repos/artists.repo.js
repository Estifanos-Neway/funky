const { artistsDb } = require("../database");

module.exports = {
    getMany: () => {
        return artistsDb.findMany();
    },
    getById: ({ id }) => {
        return artistsDb.findById({ id });
    }
};