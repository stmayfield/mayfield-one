const express = require("express");
const next = require("next");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(3001, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3001");
  });

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(function (username, password, done) {
      // if (username === "admin" && password === "admin") {
      //   return done(null, { id: 1, username: "admin" });
      // } else {
      //   return done(null, false);
      // }
      const user = { id: 1, username: "admin" };

      if (!user) {
        return done(null, false, { message: "Bad username" });
      }

      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          console.log("success", user, res);
          return done(null, user);
        } else {
          console.log("invalid", user, res);
          return done(null, false, { message: "Bad password" });
        }
      });
    })
  );

  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.redirect("/");
  });
});
