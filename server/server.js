const express = require("express");
require("dotenv").config();
const app = express();
const authRoute = require("./routes/auth-router");
const PORT = 5000;
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require('./routes/contact.router')

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
// error handler 
app.use(errorMiddleware)

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at : ${PORT}`);
  });
});
