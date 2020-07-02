const R = require("ramda");
const getClient = require("../postgres");

const fetchTeams = async (teamid) => {
    const sql = `SELECT id, name, office FROM teams WHERE id = ANY($1)`;
    const params = [teamid];
    const db = await getClient();
    try {
        const rows = await db.execute(sql, params);
        const groupedById = R.groupBy(R.prop("id"), rows);
        return R.map((id) => groupedById[id] || [], teamid);
    } finally {
        db.release();
    }
};

module.exports = fetchTeams;
