export default function(sequelize, DataTypes) {
  return sequelize.define('user',{
    id: {
      type: DataTypes.INTERGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(32),
      allowNull: false
    }
  }, {
    tableName: 'user'
  })
};