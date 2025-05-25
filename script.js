const express = require('express');
const path = require('path');

const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Perform authentication
    if (username === "admin" && password === "password") {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});