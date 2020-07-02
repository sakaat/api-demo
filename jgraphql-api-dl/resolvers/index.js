const searchUser = require("./searchUser");

const resolvers = {
    Query: {
        search: async (_parent, args) => {
            return searchUser(args.q);
        },
    },
    User: {
        team: async (parent, _args, context) => {
            return (await context.listLoaderTeams.load([parent.teamid]))[0];
        },
    },
    Team: {
        member: async (parent, _args, context) => {
            return await context.listLoaderUsers.load([parent.id]);
        },
    },
};

module.exports = resolvers;
