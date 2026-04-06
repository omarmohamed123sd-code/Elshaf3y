const express = require("express");
const app = express();

app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Server is working 🔥");
});

// 🔥 أهم سطر في حياتك هنا
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
