module.exports = (sequelize, DataTypes) => {
    const UserDetails2 = sequelize.define("users_details2", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      password: { // Corrected typo
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageData: {
        type: DataTypes.MEDIUMTEXT,
        allowNull: true,
      },
    });
  
    return UserDetails2;
  };
  