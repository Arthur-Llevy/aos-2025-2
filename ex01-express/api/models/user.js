import { DataTypes } from "sequelize";

const getUserModel = (sequelize, { DataTypes }) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Message, { foreignKey: "userId" });
    User.hasMany(models.Task, { foreignKey: "taskId" });
  };

  return User;
};

export default getUserModel;