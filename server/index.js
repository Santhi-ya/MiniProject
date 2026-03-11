 const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_DB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// routes
const noteRoutes = require("./routes/notes");
app.use("/notes", noteRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});