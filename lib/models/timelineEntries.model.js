import Sequelize from 'sequelize';

const model = connection => {
  const timelineEntries = connection.define('timelineEntries', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      required: true
    },
    displayImage: {
      type: Sequelize.STRING,
      required: false
    },
    date: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      required: true,
      allowNull: true
    },
    timelineId: {
      type: Sequelize.UUID,
      required: true,
      allowNull: false
    }
  });

  return timelineEntries;
};

export default model;
