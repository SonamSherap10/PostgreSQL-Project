import { Sequelize } from "sequelize-typescript";   
import { envConfig } from "../config/conflig.js";
const sequelize = new Sequelize(envConfig.connectionString as string)

try {
    sequelize.authenticate().then(() => {
        console.log("Database connection has been established successfully.");
    })
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
 
export default sequelize;