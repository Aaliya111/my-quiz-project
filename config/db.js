import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://missaaliyakhan111_db_user:mongodb2026@cluster0.pxylfdw.mongodb.net/mernquizApp",
    )
    .then(() => {
      console.log("DB connected");
    });
};
