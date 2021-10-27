
import { DataTypes } from "sequelize";
import sq from './connection';

export const User = sq.define("user", {
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password: {
        type : DataTypes.STRING,
        allowNull : false
    }
})