const express = require("express");

const app = express();

app.listen(4000, () => {
  console.log("listening to requests on port 4000");
});
