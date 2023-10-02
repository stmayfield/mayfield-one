const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.NEXT_PUBLIC_DB_URL,
  { logging: console.log } // Default, displays the first parameter of the log function call
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
