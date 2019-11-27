var express = require("express");
var cors = require("cors");
var app = express();
var axios = require("axios");

app.use(cors());
app.use(express.json());
app.post("/tasks/correct", function(req, res) {
  axios
    .post(
      "https://us-central1-divine-descent-260122.cloudfunctions.net/http",
      req.body
    )
    .then(({ data }) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(e => {
      console.error(e);
      res.status(500).json({ correto: false, erro: "Erro interno" });
    });
});
const port = 7777;
app.listen(port, function() {
  console.log("Server listening to the port: ", port);
});
