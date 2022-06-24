const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
//occurs when "console.log(google)" because google is not defined
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connection to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server : ${process.env.PORT}`);
});

//unhandled promise rejection
// when error occurs but does not crashes we have to
//stop the server asap
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
