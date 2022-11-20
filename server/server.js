// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");
const propsController = require("./controllers/propsController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));

// Connect to database
connectToDb();

// Routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);
app.get("/props", requireAuth, propsController.fetchProps);
app.get("/props/:id", requireAuth, propsController.fetchProp);
app.post("/props", requireAuth, propsController.createProp);
app.put("/props/:id", requireAuth, propsController.updateProp);
app.delete("/props/:id", requireAuth, propsController.deleteProp);

// Start our server
app.listen(process.env.PORT); 
console.log(`Server listening on port ${process.env.PORT}`);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});