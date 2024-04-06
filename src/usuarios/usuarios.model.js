const { func } = require('joi');
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize){
    const attributes = {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false, iuniqe:true},
        password: {type: DataTypes.STRING, allowNull: false},
        isActive:{type: DataTypes.BOOLEAN,allowNull:false, defaultValue: true},
        fullName:{type: DataTypes.VIRTUAL, get(){return `${this.firstName} ${this.lastName}`}}
    }

    return sequelize.define('User', attributes);
}


//INSERT INTO `Users` (`id`,`firstName`,`lastName`,`email`,`password`,`isActive`,`createdAt`,`updatedAt`) 
//VALUES (DEFAULT,?,?,?,?,?,?,?);