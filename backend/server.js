const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
// const gameRoutes = require("./routes/gameRoutes");
// const userRoutes = require("./routes/userRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connect to MongoDB
connectDB();

// Middleware for JSON parsing
app.use(express.json());

// Routes
// app.use("/api/games", gameRoutes);
// app.use("/api/users", userRoutes);

// Socket.IO logic remains here...

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
