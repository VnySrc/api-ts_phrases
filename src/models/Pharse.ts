import {sequelize} from "../instances/mysql"
import {Model , DataTypes} from "sequelize"

export interface PharseInstance extends Model {
    id: number,
    author: string,
    content: string,
}
 

export const Pharse = sequelize.define<PharseInstance>("Pharse", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },

    author:{
        type: DataTypes.STRING
    },

    content: {
        type: DataTypes.STRING
    },   
},
    {
        tableName: "phrases",
        timestamps: false,
    }

)