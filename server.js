const express = require("express");
const { initializeFirebase } = require("./config/firebase");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "Firestore Users API is running" });
});

async function startServer() {
  try {
    const db = initializeFirebase();
    await db.collection("users").limit(1).get();
    app.locals.db = db;
    console.log("Firebase Firestore connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Firebase Firestore connection failed:", error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };