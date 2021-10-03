const {DataTypes} = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define('User' , {
    //Defining a schema of the table named User
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull :false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
});

module.exports = User;