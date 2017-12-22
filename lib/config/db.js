import Sequelize from 'sequelize';
import path from 'path';

import models from '../models';

const connection = new Sequelize('timelinebuilder', 'root', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle:1000
  },

  storage: path.resolve(__dirname, '../data/data.sqlite')
});

const db = {};
const force = false;

db.Sequelize = Sequelize;
db.connection = connection;

db.timelines = models.timelinesModel(connection);
db.timelineEntries = models.timelineEntriesModel(connection);
db.users = models.usersModel(connection);

db.timelineEntries.belongsTo(db.timelines);
db.timelines.hasMany(db.timelineEntries);

db.timelines.sync({ force });
db.timelineEntries.sync({ force });
db.users.sync({ force });

export default db;
