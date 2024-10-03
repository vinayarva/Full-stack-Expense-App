const sequelize =  require("../database/database")
const Sequelize =  require("sequelize")

const expenses = sequelize.define("expenses",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categories:{
        type: Sequelize.STRING,
        allowNull: false,
      }
    }
)

module.exports = expenses;