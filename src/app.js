const express = require("express");
const app = express();
const router = require("./modules");
const cors = require("cors");
const db = require("./modules/loaders/model-loader");

// express middleware goes here
app.use(express.json());
app.use(cors());

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//my routes
// root route
app.get("/", (req, res) => {
  console.log(req.query.hell);
  res.send("Hello world").status(200);
});

// main modular route
app.use("/api", router.routers);

// database connection
db.sequelize
  .authenticate()
  .then((res) => {
    console.log("success connecting to database");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// gracefull shutdown
process.on("SIGTERM", () => {
  // close database connection first
  db.sequelize.close();

  // close server connection
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
