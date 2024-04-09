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
  { id: 1, name: "Rex", owner: "Dan", age: 4, breed: "Dachshund" },
  { id: 2, name: "Flower", owner: "Trish", age: 7, breed: "Golden Retriever" },
  { id: 3, name: "Iggy", owner: "Matt", age: 10, breed: "Iguana" },
  { id: 4, name: "Whiskers", owner: "Sally", age: 6, breed: "Persian" },
];

//get request to an endpoint : get all animals
app.get("/api/v1/pets", (req, res) => {
  res.send(pets);
});

//get request using a query : get animal by owner 
app.get("/api/v1/pets/owner", (req, res) => {
  const owner = req.query.owner;
  const ownerObj = pets.find((pet) => pet.owner.toLowerCase() === owner);
  if (ownerObj) {
    res.send(ownerObj);
  } else {
    res.send({ msg: "we have no owners by that name" });
  }
});

//get request using a parameter : get animal by name
app.get("/api/v1/pets/:name", (req, res) => {
  let pet = pets.find((pet) => {
    return pet.name.toLowerCase() === req.params.name;
  });
  if (pet) {
    res.send(pet);
  } else {
    res.send({ msg: "we have no pets by that name" });
  }
});

//post request using endpoint : add an animal 
app.post("/api/v1/pets/add", (req, res) => {
  const { name, age, breed, owner } = req.body;
  const id = pets[pets.length - 1].id + 1;
  const newPet = {
    id,
    name,
    age,
    breed,
    owner,
  };
  pets.push(newPet);
  res.send({ msg: "success", pets: pets });
});

//run the server on declared port
app.listen(PORT, () => {
  console.log("running on " + PORT);
});
