const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("node:path");

// importing Routers
const indexRouter = require("./routes/indexRouter");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: "membersOnly",
    secret: "I am yashu",
    resave: false,
    saveUninitialized: false,
  }),
);

passport.use(new LocalStrategy((username, password, done) => {}));

app.use("/", indexRouter);

app.listen(6004, (err) => {
  if (err) {
    throw new err();
  }
  console.log("app is running on http://localhost:6004");
});
