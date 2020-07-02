CREATE TABLE IF NOT EXISTS users
(
  id     varchar(36) NOT NULL
, name   varchar(40) NOT NULL
, teamid varchar(36) NOT NULL
, PRIMARY KEY (id)
);
CREATE INDEX ON users (name);
CREATE INDEX ON users (teamid);

CREATE TABLE IF NOT EXISTS teams
(
  id     varchar(36) NOT NULL
, name   varchar(40) NOT NULL
, office varchar(10) NOT NULL
, PRIMARY KEY (id)
);
CREATE INDEX ON teams (name);
CREATE INDEX ON teams (office);
