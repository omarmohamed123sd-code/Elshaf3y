const express = require("express");

const app = express();

// مهم جداً عشان Railway
const PORT = process.env.PORT || 3000;

// route بسيط للتجربة
app.get("/", (req, res) => {
    res.send("Elshaf3y Server is running 🚀");
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
