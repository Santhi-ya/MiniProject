const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const notesRoutes = require("./routes/notes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/notesdb")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

// Routes
app.use("/notes", notesRoutes);

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});