const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", require("./api/employees.js"));

app.use((res, req, next) => {
  next( { status: 404, message: "Could not find that endpoint"} )
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json(err.message || "ERROR! Something went wrong. Sorry bud.")
})

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
