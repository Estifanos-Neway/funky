const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: "Creator",
    fields: () => (
        {
            id: {
                type: GraphQLNonNull(GraphQLString),
                description: "The creator's unique id."
            },
            full_name: {
                type:  GraphQLNonNull(GraphQLString),
                description: "The creator's full name."
            },
            username: {
                type:  GraphQLNonNull(GraphQLString),
                description: "The creator's username."
            },
            memberSince: {
                type:  GraphQLNonNull(GraphQLString),
                description: "The creator's joining date."
            },
        }
    )
}
);