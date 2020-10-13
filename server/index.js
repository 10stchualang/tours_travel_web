const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const { register, login } = require("./services/user.service");
const { verifyToken } = require("./utils/jwt");

app.prepare().then(() => {
  const server = express();

  // db
  mongoose.set("useCreateIndex", true);
  mongoose.connect("mongodb://localhost:27017/tour", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("[DB] Database connect successfully");
  });

  // server
  server.use(cors());

  server.use(async (req, res, next) => {
    try {
      const token = req.header("x-access-token");
      if (!token) return next();
      const data = await verifyToken(token);
      if (!data) return next();
      req.user = data.user;
      next();
    } catch (e) {
      next(e);
    }
  });

  //login
  server.post("/login", json(), async function (req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await login({ password, email });
      res.send({ token });
    } catch (error) {
      next(error);
    }
  });

  //register
  server.post("/register", json(), async function (req, res, next) {
    const { email, password, name } = req.body;
    try {
      const user = await register({ email, name, password });
      console.log(user);
      res.send({ user });
    } catch (error) {
      next(error);
    }
  });

  //get profile
  server.get("/get-profile", json(), async function (req, res, next) {
    if (!req.user) {
      res.send("dkm");
      // next();
    }
    if (req.user) {
      res.send({ user: req.user });
    }
  });

  // server.get("/", (req, res) => res.send("It's working!"));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = 1337;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server on http://localhost:${port}`);
  });
});
