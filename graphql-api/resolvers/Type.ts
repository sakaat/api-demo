import { users } from "./users";
import { teams } from "./teams";

export = {
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
