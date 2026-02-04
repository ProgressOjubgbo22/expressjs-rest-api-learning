const express = require("express");

// ==========================
// Middleware
// ==========================
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// ==========================
// Feature Modules
// ==========================
const routing = require("./routing");
const httpMethod = require("./httpMethod");
const middleware = require("./middleware");
const templating = require("./templating");
const form = require("./form");
const cookie = require("./cookie");
const session = require("./session");
const sessionAuth = require("./sessionauth");
const jwtAuth = require("./jwtauth");

// RESTful API
const usersApi = require("./api");

// ==========================
// App Setup
// ==========================
const app = express();
const PORT = process.env.PORT || 3000;

// ==========================
// Global Middleware
// ==========================
app.use(express.json());
app.use(cookieParser());

app.use(
  expressSession({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      // secure: true (enable in production with HTTPS)
    },
  })
);

// ==========================
// View Engine & Static Files
// ==========================
app.set("view engine", "ejs");
app.use(express.static("public"));

// ==========================
// Routes
// ==========================

// RESTful API routes
app.use("/api/users", usersApi);

// Authentication
app.use("/", jwtAuth);
app.use("/", sessionAuth);

// Learning & Demo Routes
app.use("/", session);
app.use("/", cookie);
app.use("/", form);
app.use("/", templating);
app.use("/", middleware);
app.use("/", httpMethod);
app.use("/", routing);

// ==========================
// Server
// ==========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
