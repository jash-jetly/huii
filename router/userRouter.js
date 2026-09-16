const express = require("express");
const userSchema = require("../schema/userSchema");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  }

  try {
    const db = req.app.locals.db;
    const document = await db.collection("users").add({
      ...value,
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: "User stored successfully",
      userId: document.id,
    });
  } catch (databaseError) {
    console.error("Error storing user:", databaseError.message);
    return res.status(500).json({
      message: "Unable to store user in Firestore",
    });
  }
});

module.exports = router;