const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { readFileSync } = require("fs");
const expressPlayground = require("graphql-playground-middleware-express")
    .default;

const app = express();

const typeDefs = readFileSync("./typeDefs.graphql", "utf8");
const resolvers = require("./resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.applyMiddleware({ app });

app.get(
    "/playground",
    expressPlayground({
        endpoint: "/graphql",
    }),
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
