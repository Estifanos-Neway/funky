const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { creatorQueries } = require("./creator");
// @ts-ignore
const { artistQueries } = require("./artist");
// @ts-ignore
const { pageQueries } = require("./page");

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "The root query.",
        fields: () => ({
            ...creatorQueries,
            ...artistQueries,
            ...pageQueries
        })
    })
});