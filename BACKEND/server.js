
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route.js");
const gigRoute = require("./routes/gig.route.js");
const orderRoute = require("./routes/order.route.js");
const conversationRoute = require("./routes/conversation.route.js");
const messageRoute = require("./routes/message.route.js");
const reviewRoute = require("./routes/review.route.js");
const authRoute = require("./routes/auth.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:8800", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8801, () => {
  connect();
  console.log("Backend server is running!");
});
