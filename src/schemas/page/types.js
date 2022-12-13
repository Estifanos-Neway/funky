const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} = require("graphql");
const { artistsRepo, creatorsRepo } = require("../../repos");
const utilTypes = require("../utils/types");

module.exports = {
    Page: new GraphQLObjectType({
        name: "Page",
        fields: () => {
            // @ts-ignore
            const { artistTypes } = require("../artist");
            const { creatorTypes } = require("../creator");
            return {
                id: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "The page's unique id."
                },
                artist: {
                    type: GraphQLNonNull(artistTypes.Artist),
                    description: "The artist this page is about.",
                    resolve: (parent) => artistsRepo.getById({ id: parent.artist.id })
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
                    type: GraphQLNonNull(GraphQLList(GraphQLNonNull(creatorTypes.Creator))),
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
                    resolve: (parent, args) => parent.creators.slice(args.skip, args.skip + args.limit).map(creator => creatorsRepo.getById({ id: creator.id }))
                },
                created_at: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "The page's creation date."
                }
            };
        }
    }
    )
};