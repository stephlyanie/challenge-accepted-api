const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of creations
  .get((req, res) => {
    knex
    .select(
      "creation.id",
      "creation.created_by_id",
      "user.username",
      "user.image_url as profile_pic",
      "creation.name",
      "challenge.name as challenge",
      "category.name as category",
      "type.name as type",
      "creation.description",
      "creation.image_url"
    )
    .from("creation")
    .join("user", 'user.id', 'creation.created_by_id')
    .join("challenge", "challenge.id", "creation.challenge_id")
    .join("type", 'type.id', 'challenge.type_id')
    .join("category", "category.id", "type.category_id")
    .then((creations) => {
        res.status(200).json(creations);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting creations"
        });
    })
  })

  // Create/post a new creation
  .post((req, res) => {
    knex("creation")
      .insert({
        id: uuidv4(),
        name:req.body.name,
        description: req.body.description,
        created_by_id: req.body.created_by_id,
        challenge_id: req.body.challenge_id,
        image_url: "https://images.unsplash.com/flagged/photo-1561668038-2742fcef75d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    })
    .catch((error) => {
      console.log(error);
    })
  });

router
  .route("/:id")
  // Get details of a single creation
  .get((req, res) => {
    knex
    .select(
      "creation.id",
      "creation.created_by_id",
      "user.username",
      "user.image_url as profile_pic",
      "creation.name",
      "challenge.name as challenge",
      "category.name as category",
      "type.name as type",
      "creation.description",
      "creation.image_url"
    )
    .from("creation")
    .join("user", 'user.id', 'creation.created_by_id')
    .join("challenge", "challenge.id", "creation.challenge_id")
    .join("type", 'type.id', 'challenge.type_id')
    .join("category", "category.id", "type.category_id")
    .where(`creation.id`, req.params.id)
    .then((creations) => {
        res.status(200).json(creations);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting creations"
        });
    })
  });

// Edit details of a single creation
router.put("/:id", (req, res) => {
  knex("creation")
  .update({
    name: req.body.name,
    description: req.body.description,
    created_by_id: req.body.created_by_id,
    challenge_id: req.body.challenge_id
  })
  .where('id', req.params.id)
  .then(()=> {
    res.status(200).send('Creation edited successfully');
  })
  .catch((error)=>{
    res.status(404).send(`Error editing the creation`);
    console.error(error);
  })
});

// Delete a single creation
router.delete("/:id/delete", (req, res) => {});

module.exports = router;
