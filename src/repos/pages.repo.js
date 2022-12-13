const { pagesDb } = require("../database");

module.exports = {
    getMany: () => pagesDb.findMany({}),
    getById: ({ id }) => pagesDb.findById({ id }),
    getByArtist: ({ artistId }) => {
        const conditions = { "artist.id": artistId };
        return pagesDb.findMany({ conditions });
    }
};