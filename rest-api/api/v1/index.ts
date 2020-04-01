import express = require("express");
const router = express.Router();

import { users } from "./users";
import { teams } from "./teams";

router.get("/", (_req, res) => {
    res.send("Hello, API v1!");
});

router.get("/users", (_req, res) => {
    const data = { users: [] };
    users.map((u) => data.users.push({ id: u.id, name: u.name }));
    res.send(data);
});

router.get("/users/search", (req, res) => {
    const data = { users: [] };
    users
        .filter((u) => u.name.includes(req.query.q))
        .map((u) => {
            data.users.push({ id: u.id, name: u.name });
        });
    res.send(data);
});

router.get("/users/:userid", (req, res) => {
    const result = users.filter((u) => u.id == req.params.userid)[0];
    if (!result) {
        res.sendStatus(404);
    }
    res.send(result);
});

router.get("/teams", (_req, res) => {
    const data = { teams: [] };
    teams.map((t) => data.teams.push({ id: t.id, name: t.name }));
    res.send(data);
});

router.get("/teams/:teamid", (req, res) => {
    const result = teams.filter((t) => t.id == req.params.teamid)[0];
    if (!result) {
        res.sendStatus(404);
    }
    res.send(result);
});

router.get("/teams/:teamid/users", (req, res) => {
    const result = users.filter((u) => u.team == req.params.teamid);
    if (!result[0]) {
        res.sendStatus(404);
    }
    res.send(result);
});

export = router;
