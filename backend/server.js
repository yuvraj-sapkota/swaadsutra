const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// --deploy
const path = require("path");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const menuRoutes = require("./routes/menuRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const qrCodeRoutes = require("./routes/qrCodeRoutes");
const publicMenuRoutes = require("./routes/publicMenuRoutes");

const app = express();

// getting my project's location   --deploy
const _dirname = path.resolve();

const cors = require("cors");
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/qrcode", qrCodeRoutes);
app.use("/api/public", publicMenuRoutes);

// serving all the frontend file    --deploy
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("/{*any}", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on the port number ${process.env.PORT}`);
});
