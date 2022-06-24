const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config
dotenv.config({ path: "backend/config/config.env" });

//connection to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server : ${process.env.PORT}`);
});
