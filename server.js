//requirements and port#
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

//middleware
app.use(cors());
app.use(express.json());

//data
const pets = [
  { id: 1, name: "goofy", owner: "dan", age: 4, breed: "Dachshund" },
  { id: 2, name: "flower", owner: "trish", age: 7, breed: "Golden Retriever" },
  { id: 3, name: "florio", owner: "matt", age: 10, breed: "German Shepherd" },
];

//get request to an endpoint
app.get("/api/v1/pets", (req, res) => {
  res.send(pets);
});

//get request to using a query
app.get("/api/v1/pets/owner", (req, res) => {
  const owner = req.query.owner;
  const ownerObj = pets.find((pet) => pet.owner === owner);
  if (ownerObj) {
    res.send(ownerObj);
  } else {
    res.send({ msg: "we have no owners by that name" });
  }
});

//get request using a parameter
app.get("/api/v1/pets/:name", (req, res) => {
  let pet = pets.find((pet) => {
    return pet.name === req.params.name;
  });
  if (pet) {
    res.send(pet);
  } else {
    res.send({ msg: "we have no pets by that name" });
  }
});

//run the server on declared port
app.listen(PORT, () => {
  console.log("running on " + PORT);
});
