// This is just an example model/table of a simple user
// with username and password only.
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return User;
};
