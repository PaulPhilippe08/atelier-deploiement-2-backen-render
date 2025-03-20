require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://paulphilippe:1234567890@deploiementrender.pydzi.mongodb.net/?retryWrites=true&w=majority&appName=deploiementrender"
    );
    console.log("✅ MongoDB connecté avec succès !");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectDB;
