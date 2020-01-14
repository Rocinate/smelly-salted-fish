import Sequelize from 'sequelize'

const Management = new Sequelize('mysql://root:123456@localhost:3306/demo', {
  define: {
    timestamps: false
  }
})

module.exports = {
  Management
} 