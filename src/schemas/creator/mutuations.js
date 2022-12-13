const creatorTypes = require("./types");
const { creatorsRepo } = require("../../repos");

module.exports = {
    creatorSignIn: {
        description: "Sign in a creator.",
        type: creatorTypes.CreatorSignIn,
        args: {
            CreatorSignInInput: {
                type: creatorTypes.CreatorSignInInput
            }
        },
        resolve: (parent, args) => creatorsRepo.signIn(args)
    }
};