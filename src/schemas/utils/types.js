const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require("graphql");

module.exports = {
    Image: new GraphQLObjectType({
        name: "Image",
        fields: () => (
            {
                path: {
                    type: GraphQLNonNull(GraphQLString),
                    description: "The image's path."
                }
            }
        )
    }
    )
};