const getClient = require("../postgres");

const resolvers = {
    Query: {
        search: async (_parent, args) => {
            const sql = `SELECT id, name, teamid FROM users WHERE name LIKE $1`;
            const params = [`%${args.q}%`];
            const db = await getClient();
            try {
                return await db.execute(sql, params);
            } finally {
                db.release();
            }
        },
    },
    User: {
        team: async (parent) => {
            const sql = `SELECT id, name, office FROM teams WHERE id = $1`;
            const params = [parent.teamid];
            const db = await getClient();
            try {
                return (await db.execute(sql, params))[0];
            } finally {
                db.release();
            }
        },
    },
    Team: {
        member: async (parent) => {
            const sql = `SELECT id, name, teamid FROM users WHERE teamid = $1`;
            const params = [parent.id];
            const db = await getClient();
            try {
                return await db.execute(sql, params);
            } finally {
                db.release();
            }
        },
    },
};

module.exports = resolvers;
