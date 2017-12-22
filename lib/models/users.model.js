import Sequelize from 'sequelize';

const model = connection => {
  const Users = connection.define('users', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      required: true
    },
    lastName: {
      type: Sequelize.STRING,
      required: true
    },
    profileImage: {
      type: Sequelize.STRING,
      required: false
    },
    heroImage: {
      type: Sequelize.STRING,
      required: false
    },
    password: {
      type: Sequelize.STRING,
      required: true
    },
    email: {
      type: Sequelize.STRING,
      required: true
    }
  });

  return Users;
};

export default model;
