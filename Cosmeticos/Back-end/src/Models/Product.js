const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      category: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      benefits: {
        type: DataTypes.TEXT,
      },
      application: {
        type: DataTypes.JSON, // Esto debe ser un JSON si contiene pasos con descripciones
      },
      images: {
        type: DataTypes.JSON, // Esto debe ser un JSON si contiene objetos con URL y alt
      },
      colors: {
        type: DataTypes.JSON, // Esto debe ser un JSON si contiene objetos de colores
      },
    },
    {
      timestamps: false,
    }
  );
};
