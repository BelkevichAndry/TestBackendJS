import {DataTypes} from "sequelize";
import {sequelize} from "../index";
export const Lessons = sequelize.define("lessons", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
   },{
    timestamps: false,
});

