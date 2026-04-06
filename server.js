const express = require("express");
const app = express();

app.use(express.json());

const users = [
    { username: "admin", password: "1234" }
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => 
        u.username === username && u.password === password
    );

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});