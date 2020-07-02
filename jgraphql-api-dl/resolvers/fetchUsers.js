const R = require("ramda");
const getClient = require("../postgres");

const fetchUsers = async (id) => {
    const sql = `SELECT id, name, teamid FROM users WHERE teamid = ANY($1)`;
    const params = [id];
    const db = await getClient();
    try {
        const rows = await db.execute(sql, params);
        const groupedById = R.groupBy(R.prop("teamid"), rows);
        return R.map((teamid) => groupedById[teamid] || [], id);
    } finally {
        db.release();
    }
};

module.exports = fetchUsers;
