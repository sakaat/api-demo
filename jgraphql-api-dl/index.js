const { ApolloServer } = require("apollo-server-express");
const DataLoader = require("dataloader");
const express = require("express");
const { readFileSync } = require("fs");
const expressPlayground = require("graphql-playground-middleware-express")
    .default;

const fetchUsers = require("./resolvers/fetchUsers");
const fetchTeams = require("./resolvers/fetchTeams");

const app = express();

const typeDefs = readFileSync("./typeDefs.graphql", "utf8");
const resolvers = require("./resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => {
        return {
            listLoaderUsers: new DataLoader(fetchUsers),
            listLoaderTeams: new DataLoader(fetchTeams),
        };
    },
});
server.applyMiddleware({ app });

app.get(
    "/playground",
    expressPlayground({
        endpoint: "/graphql",
    }),
);

app.listen(3000, () => console.log("GraphQL app listening on port 3000!"));
