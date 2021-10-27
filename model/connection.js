import { Sequelize } from "sequelize";
import path from "path"
import env from "dotenv"
env.config()

const sq = new Sequelize({
    dialect : process.env.DB_DIALECT,
    storage : path.join(__dirname,"../db.sqlite"),
    host : process.env.DB_HOST
})

export default sq