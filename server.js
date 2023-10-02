const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const { PORT, API_BASE_PATH, API_VERSION } = require("./constants");

// Routes
const currentApiPath = `${API_BASE_PATH}${API_VERSION}`;
const userRoutes = require("./routes/userRoutes");

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.json());
  app.use(currentApiPath + "/users", userRoutes);

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
    console.log("> Current API Version path:", currentApiPath + "/users");
  });
});
