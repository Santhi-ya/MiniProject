const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

// GET all notes
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CREATE note
router.post("/", async (req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content
        });

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE note
router.put("/:id", async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                content: req.body.content
            },
            { new: true }
        );

        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE note
router.delete("/:id", async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;