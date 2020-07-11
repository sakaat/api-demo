const users = require("./users");
const teams = require("./teams");

const resolvers = {
    Query: {
        search: (_parent, args) => {
            return users.filter((u) => u.name.includes(args.q));
        },
    },
    User: {
        team: (parent, _args) => {
            return teams.filter((t) => t.id === parent.teamid)[0];
        },
    },
    Team: {
        member: (parent, _args) => {
            return users.filter((u) => u.teamid === parent.id);
        },
    },
};

module.exports = resolvers;
