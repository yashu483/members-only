require("dotenv").config();

const express = require("express");
const session = require("express-session");
const path = require("node:path");
const db = require("./db/queries");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT;

// importing Routers
const indexRouter = require("./routes/indexRouter");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// session set up
app.use(
  session({
    name: "membersOnly",
    secret: "I am yashu",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());

// passport.js setup for authentication using username and password
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.getUserFromUsername(username);

      if (!user) {
        return done(null, false, { message: "Invalid username" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Invalid password" });
      }

      return done(null, user);
    } catch (err) {
      done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.getUserFromId(id);
    return done(null, user);
  } catch (err) {
    done(err);
  }
});

// make user object available in locals obj on every requests
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// routes
app.use("/", indexRouter);
app.use("/sign-up", signUpRouter);
app.use("/log-in", logInRouter);
app.use("/new-post", newPostRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`App is running on http://localhost:${PORT}`);
});
