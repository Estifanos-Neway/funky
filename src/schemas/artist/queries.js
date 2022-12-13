const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const artistTypes = require("./types");
const { artistsRepo } = require("../../repos");
module.exports = {
    artists: {
        type: GraphQLList(artistTypes.Artist),
        description: "Returns list of artists.",
        resolve: () => artistsRepo.getMany()
    },
    artist: {
        type: artistTypes.Artist,
        description: "Returns a single artist from the given id.",
        args: {
            id: {
                type: GraphQLNonNull(GraphQLString),
                description: "Id of the artist to be returned."
            }
        },
        resolve: (parent, args) => artistsRepo.getById({ id: args.id })
    }
};