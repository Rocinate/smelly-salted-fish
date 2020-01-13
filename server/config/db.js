import Sequelize from 'sequelize'

const Management = new Sequelize('mysql://localhost:3306/demo', {
  define: {
    timestamps: false
  }
})

module.exports = {
  Management
} 