const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Video",
    {
      id_video: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url: {
        type: DataTypes.TEXT,
      },
   
    },
    {
      timestamps: false,
    }
  );
};
