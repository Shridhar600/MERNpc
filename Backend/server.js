const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const userRoutes = require("./routes/userRoutes")
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/middleware");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is ON.");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)
//req.params.id to fetch particular data from the data set.
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port:${PORT}.`));
