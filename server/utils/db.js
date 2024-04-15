const mongoose = require("mongoose");
// const URI = "mongodb://localhost:27017/mern_admin";

const clusterName = "cluster0";
const databaseName = "MernWeb";

// Encode special characters in username and password
const encodedUsername = encodeURIComponent("amamahish73");
const encodedPassword = encodeURIComponent("aman@");

// Construct the URI string
const URI = `mongodb+srv://${encodedUsername}:${encodedPassword}@${clusterName}.squcnof.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
