import { users } from "./users";

export = {
    search: async (_parent, args) => {
        return users.filter((u) => u.name.includes(args.q));
    },
};
