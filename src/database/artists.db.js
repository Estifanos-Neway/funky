const { artists } = require("./data");
module.exports = {
    findMany: () => artists,
    findById: ({ id }) => artists.find((artist) => artist.id == id)
};