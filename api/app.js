import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/categories", (req, res) => {
  const q = "SELECT * FROM posts";

  db.query(q, (err, result) => {
    if (err) {
      return res.status(500).json("There was an error with the database!");
    }
    res.status(200).json(result.rows);
  });
});

app.listen(8800, () => {
  console.log("SERVER is running at port 8800");
});
