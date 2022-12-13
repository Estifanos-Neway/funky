const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require("graphql");
const { pagesRepo } = require("../../repos");
const utilTypes = require("../utils/types");

module.exports = {
    Artist: new GraphQLObjectType({
        name: "Artist",
        fields: () => {
            // @ts-ignore
            const { pageTypes } = require("../page");
            return {
                id: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "The artist's unique id."
                },
                full_name: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "The artist's full name."
                },
                stage_name: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "The artist's stage name."
                },
                titles: {
                    type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLString))),
                    description: "The artist's titles."
                },
                bio: {
                    type: GraphQLString,
                    description: "The artist's biography."
                },
                avatar: {
                    type: utilTypes.Image,
                    description: "The artist's avatar (profile image)."
                },
                pages: {
                    type: GraphQLNonNull(GraphQLList(GraphQLNonNull(pageTypes.Page))),
                    description: "Pages about this artist.",
                    resolve: (parent) => pagesRepo.getByArtist({ artistId: parent.id })
                }
            };
        }
    })
};