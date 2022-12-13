const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const pageTypes = require("./types");
const { pagesRepo } = require("../../repos");

module.exports = {
    pages: {
        type: GraphQLList(pageTypes.Page),
        resolve: () => pagesRepo.getMany(),
        description: "Returns list of pages."
    },
    page: {
        type: pageTypes.Page,
        args: {
            id: {
                type: GraphQLNonNull(GraphQLString),
                description: "Id of the page to be returned."
            }
        },
        resolve: (parent, args) => pagesRepo.getById({ id: args.id }),
        description: "Returns a single page from the given id."
    }
};