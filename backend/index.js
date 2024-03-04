const dotenv = require("dotenv");
const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log("Database is connected");
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
};

connectDb();

app.get("/", (req, res) => {
  res.send("API test");
});

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
