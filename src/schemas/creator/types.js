const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType
} = require("graphql");

const Creator = new GraphQLObjectType({
    name: "Creator",
    fields: () => (
        {
            id: {
                type: GraphQLNonNull(GraphQLString),
                description: "The creator's unique id."
            },
            full_name: {
                type: GraphQLNonNull(GraphQLString),
                description: "The creator's full name."
            },
            username: {
                type: GraphQLNonNull(GraphQLString),
                description: "The creator's username."
            },
            member_since: {
                type: GraphQLNonNull(GraphQLString),
                description: "The creator's joining date."
            },
        }
    )
});

module.exports = {
    Creator,
    CreatorSignInInput: new GraphQLInputObjectType({
        name: "CreatorSignInInput",
        description: "Creator sign-in params",
        fields: () => ({
            username: {
                type: GraphQLNonNull(GraphQLString)
            },
            password_hash: {
                type: GraphQLNonNull(GraphQLString)
            }
        })
    }),
    CreatorSignIn: new GraphQLObjectType({
        name: "CreatorSignIn",
        description: "Creator sign-in object",
        fields: () => (
            {
                creator: {
                    description: "The signed in creator",
                    type: GraphQLNonNull(Creator)
                },
                access_token: {
                    description: "Access token for the signed in creator.",
                    type: GraphQLNonNull(GraphQLString)
                },
                refresh_token: {
                    description: "Refresh token for this session.",
                    type: GraphQLNonNull(GraphQLString)
                }
            }
        )
    })
};