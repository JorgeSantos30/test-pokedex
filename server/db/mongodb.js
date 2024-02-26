import mongoose from "mongoose";

mongoose.connection.on("open", () => console.log("db connected"));

async function connectDb({ dbUri }) {
  const uri = dbUri;
  await mongoose.connect(uri);
}

export default connectDb;
