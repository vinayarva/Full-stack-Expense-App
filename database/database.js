const Sequelize =  require("sequelize")

const sequelize = new Sequelize("full stack expense app","root","vinayarva1306",{

        dialect: "mysql",
        host: "localhost",
        port: "3306",  
})


module.exports = sequelize;


// async function test() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

// test()