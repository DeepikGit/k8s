const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(process.env.MESSAGE || "Hello from Kubernetes!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
