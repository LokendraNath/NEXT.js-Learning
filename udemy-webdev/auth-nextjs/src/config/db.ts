import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error, Make Sure MongoDB is Running",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
};
