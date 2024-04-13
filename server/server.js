const express = require("express");
const app = express();
const router = require("./routes/auth-router");
const PORT = 5000;

app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log(`server is running at : ${PORT}`);
});
