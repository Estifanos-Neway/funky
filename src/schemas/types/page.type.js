const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} = require("graphql");
const utilTypes = require("./util-types");
const data = require("../../data");

module.exports = new GraphQLObjectType({
    name: "Page",
    fields: () => {
        const ArtistType = require("./artist.type");
        const CreatorType = require("./creator.type");
        return {
            id: {
                type: GraphQLNonNull(GraphQLString),
                description: "The page's unique id."
            },
            artist: {
                type: GraphQLNonNull(ArtistType),
                description: "The artist this page is about.",
                resolve: (parent) => data.artists.get({ id: parent.artist.id })
            },
            name: {
                type: GraphQLNonNull(GraphQLString),
                description: "The page's name."
            },
            description: {
                type: GraphQLString,
                description: "The page's description."
            },
            avatar: {
                type: utilTypes.Image,
                description: "The page's avatar (cover image)."
            },
            creators: {
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(CreatorType))),
                description: "The creator for this page.",
                args: {
                    skip: {
                        type: GraphQLNonNull(GraphQLInt),
                        description: "The number of creators to skip.",
                        defaultValue: 0
                    },
                    limit: {
                        type: GraphQLNonNull(GraphQLInt),
                        description: "The number of creators to be returned.",
                        defaultValue: 1
                    }
                },
                resolve: (parent, args) => parent.creators.slice(args.skip, args.skip + args.limit).map(creator => data.creators.get({ id: creator.id }))
            },
            created_at: {
                type: GraphQLNonNull(GraphQLString),
                description: "The page's creation date."
            }
        };
    }
}
);