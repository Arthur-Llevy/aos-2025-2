const getTaskModel = (sequelize, { DataTypes }) => {
  const Task = sequelize.define("task", {
    objectId: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },    

    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    concluida: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });

  Task.associate = (models) => {
    Task.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Task;
};

export default getTaskModel;