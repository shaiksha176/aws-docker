const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "Express app running on docker",
  });
});

app.listen(port, () => console.log("server running on port " + port));
