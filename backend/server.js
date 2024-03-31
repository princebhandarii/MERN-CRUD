import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path"; // Import join and dirname from path
import connectTOMongo from "./db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/UserRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

connectTOMongo();

// Use join to concatenate paths
app.use(express.static(join(__dirname, "../client/build")));
app.get("*", function (req, res) {
  res.sendFile(join(__dirname, "../client/build/index.html"));
});
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
