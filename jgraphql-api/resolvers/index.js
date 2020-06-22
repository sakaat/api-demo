const Query = require("./Query");
const Type = require("./Type");

const resolvers = {
    Query,
    ...Type,
};

module.exports = resolvers;
