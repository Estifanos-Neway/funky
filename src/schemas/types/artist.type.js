const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require("graphql");
const data = require("../../data");
const utilTypes = require("./util-types");

module.exports = new GraphQLObjectType({
    name: "Artist",
    fields: () => {
        const PageType = require("./page.type");
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
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(PageType))),
                description: "Pages about this artist.",
                resolve: (parent) => data.pages.of({ artistId: parent.id })
            }
        };
    }

}
);