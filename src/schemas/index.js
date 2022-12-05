const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const types = require("./types");
const data = require("../data");

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "The root query.",
        fields: () => ({
            creators: {
                type: GraphQLList(types.CreatorType),
                resolve: () => data.creators.getMany(),
                description: "Returns list of creators."
            },
            creator: {
                type: types.CreatorType,
                args: {
                    id: {
                        type: GraphQLNonNull(GraphQLString),
                        description: "Id of the creator to be returned."
                    }
                },
                resolve: (parent, args) => data.creators.get({ id: args.id }),
                description: "Returns a single creator from the given id."
            },
            artists: {
                type: GraphQLList(types.ArtistType),
                resolve: () => data.artists.getMany(),
                description: "Returns list of artists."
            },
            artist: {
                type: types.ArtistType,
                args: {
                    id: {
                        type: GraphQLNonNull(GraphQLString),
                        description: "Id of the artist to be returned."
                    }
                },
                resolve: (parent, args) => data.artists.get({ id: args.id }),
                description: "Returns a single artist from the given id."
            },
            pages: {
                type: GraphQLList(types.PageType),
                resolve: () => data.pages.getMany(),
                description: "Returns list of pages."
            },
            page: {
                type: types.PageType,
                args: {
                    id: {
                        type: GraphQLNonNull(GraphQLString),
                        description: "Id of the page to be returned."
                    }
                },
                resolve: (parent, args) => data.pages.get({ id: args.id }),
                description: "Returns a single page from the given id."
            }
        })
    })
});