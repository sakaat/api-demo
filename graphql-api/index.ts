import { ApolloServer } from "apollo-server-express";
import express from "express";
import fs from "fs";
import expressPlayground from "graphql-playground-middleware-express";

const app = express();

const typeDefs = fs.readFileSync("./typeDefs.graphql", "utf8");
import { resolvers } from "./resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
            "editor.theme": "light",
        },
    },
    introspection: true,
});
server.applyMiddleware({ app });

app.get("/", (_req, res) => res.send("Hello World!"));
app.get(
    "/playground",
    expressPlayground({
        endpoint: "/graphql",
    }),
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
