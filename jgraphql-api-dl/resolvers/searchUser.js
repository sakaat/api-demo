const getClient = require("../postgres");

const searchUser = async (q) => {
    const sql = `SELECT id, name, teamid FROM users WHERE name LIKE $1`;
    const params = [`%${q}%`];
    const db = await getClient();
    try {
        return await db.execute(sql, params);
    } finally {
        db.release();
    }
};

module.exports = searchUser;
