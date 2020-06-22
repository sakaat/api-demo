const users = require("./users");

module.exports = {
    search: (_parent, args) => {
        return users.filter((u) => u.name.includes(args.q));
    },
};
