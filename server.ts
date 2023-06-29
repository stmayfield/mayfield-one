const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get("*", (req: any, res: any) => {
    return handle(req, res);
  });

  app.listen(3001, (err: any) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3001");
  });
});
