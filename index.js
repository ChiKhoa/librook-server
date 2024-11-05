const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send({
    message: "Just to say hello!",
  });
});

app.post("/api/book/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    res.status(418).send({ message: "Missing title" });
  }

  res.send({
    book: {
      id,
      title,
    },
  });
});

app.listen(PORT, () => console.log(`It's alive!`));
