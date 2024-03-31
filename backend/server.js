import express from "express";
import connectTOMongo from "./db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/UserRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

connectTOMongo();

//routing
// app.get("/", (rq, rs) => {
//   rs.json({ hello: "world" });
// });

// app.post("/users", (rq, rs) => {
//   rs.json({ hello: "world" });
// });
// //const port = 5000
// const port = process.env.REACT_APP_PORT || 5000;
// app.use(express.json());

// app.use(cors());
// app.use(express.json());

// //availabel Routes

// // app.use('/api/auth',require('./routes/auth'))
// // app.use('/api/notes',require('./routes/notes'))

// // /// static file start
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
