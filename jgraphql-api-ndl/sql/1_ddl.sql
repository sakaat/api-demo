CREATE TABLE IF NOT EXISTS users
(
  id     varchar(36) NOT NULL
, name   varchar(40) NOT NULL
, teamid varchar(36) NOT NULL
, PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS teams
(
  id     varchar(36) NOT NULL
, name   varchar(40) NOT NULL
, office varchar(10) NOT NULL
, PRIMARY KEY (id)
);
