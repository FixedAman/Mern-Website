
const express = require("express");

const app = express();
const router = require("./routes/auth-router");
const PORT = 5000;
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at : ${PORT}`);
  });
});
