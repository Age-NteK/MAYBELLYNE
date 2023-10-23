const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Tutorial",
    {
      id_tutorial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      images: {
        type: DataTypes.JSON,
      },
      videos: {
        type: DataTypes.JSON,
      },
    },
    {
      timestamps: false,
    }
  );
};
