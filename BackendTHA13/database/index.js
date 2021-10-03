//npm install --save sequelize

const {Sequelize} = require("sequelize");  // It helps to handle the change of the database in future(ORM)
const sequelize = new Sequelize(  //object
    "postgres",  //database name
    "postgres",  //username
    "adityasaini25112001" , //password
    {
        host: "localhost",
        dialect: "postgres"  //Depend on the database used(if we are using redis/mysql, simply write redis/mysql in dialect and no need to change the code)

    }

)

sequelize.sync();

(async () => {  // Always use try & catch with await
    try {
        await sequelize.authenticate();  // To check if the connection is established or not
        console.log("Connection Established");
    } catch(err) {
        console.error("Unable to connect to the Database");
    }
    
})();

module.exports = sequelize;