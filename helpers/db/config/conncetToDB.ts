import mongoose from "mongoose";

const conncetToDb = async () => {
  const connection: any = {};
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:" + error);
  }
};

export default conncetToDb;
