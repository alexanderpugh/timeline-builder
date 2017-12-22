import Sequelize from 'sequelize';

const model = connection => {
  const Timelines = connection.define('timelines', {
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
    author: {
      type: Sequelize.STRING,
      defaultValue: 'anonymous',
      required: false
    }
  });

  return Timelines;
};

export default model;
