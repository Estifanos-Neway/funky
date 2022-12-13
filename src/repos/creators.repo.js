const { creatorsDb, sessionsDb } = require("../database");
const { User, Creator, Session } = require("../entities");

module.exports = {
    getMany: () => {
        return creatorsDb.findMany();
    },
    getById: ({ id }) => {
        return creatorsDb.findById({ id });
    },
    signIn: async ({ username, password_hash }) => {
        const existingCreator = await creatorsDb.exists({ conditions: { username, password_hash } });
        if (existingCreator) {
            const creator = new Creator(existingCreator);
            const user = new User({ id: existingCreator.creatorId, type: User.types.Creator });
            const refresh_token = user.createRefreshToken();
            const session = new Session({ user: user.toJson(), refreshToken: refresh_token });
            sessionsDb.add({ session });
            return {
                creator: creator.toJson(),
                access_token: user.createAccessToken(),
                refresh_token
            };
        }
    }
};