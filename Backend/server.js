// server.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Endpoint to handle user registration
app.post("/register", (req, res) => {
  try {
    const { fullName, userName, email, password } = req.body;
    const user = {
      fullName,
      userName,
      email,
      password,
    };

    // Read the existing users from users.json
    const usersJson = fs.readFileSync("users.json");
    const users = JSON.parse(usersJson);

    // Assign a unique id to the new user (you might want to use a library to generate unique ids)
    user.id = users.length + 1;

    // Append the new user to the existing users array
    users.push(user);

    // Write the updated users array back to users.json
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.status(200).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error during registration." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
