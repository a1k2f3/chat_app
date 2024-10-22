const UserDetails = (sequelize, DataTypes) => {
  const UserDetailsModel = sequelize.define("users_details", {
    selectedLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      // Using BIGINT for phone numbers is safer to avoid overflow
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    countryCode: {
      // Country code is usually small, INTEGER is fine, or even SMALLINT
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return UserDetailsModel;
}

module.exports = UserDetails;
