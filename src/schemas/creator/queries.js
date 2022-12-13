const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const creatorTypes = require("./types");
const { creatorsRepo } = require("../../repos");
module.exports = {
    creators: {
        type: GraphQLList(creatorTypes.Creator),
        resolve: () => creatorsRepo.getMany(),
        description: "Returns list of creators."
    },
    creator: {
        type: creatorTypes.Creator,
        args: {
            id: {
                type: GraphQLNonNull(GraphQLString),
                description: "Id of the creator to be returned."
            }
        },
        resolve: (parent, args) => creatorsRepo.getById({ id: args.id }),
        description: "Returns a single creator from the given id."
    },
};