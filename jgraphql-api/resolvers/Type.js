const users = require("./users");
const teams = require("./teams");

module.exports = {
    User: {
        team: (parent, _args) => {
            return teams.filter((t) => t.id === parent.team)[0];
        },
    },
    Team: {
        member: (parent, _args) => {
            return users.filter((u) => u.team === parent.id);
        },
    },
};
