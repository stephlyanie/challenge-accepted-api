const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of users
  .get((req, res) => {
    knex("user")
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting users"
        })
    })
  })


  // Create/post a new user
  .post((req, res) => {});

router
  .route("/:id")
  // Get details of a single user
  .get((req, res) => {
      knex("user")
      .where(`user.id`, req.params.id)
      .then((users) => {
          res.status(200).json(users);
      })
      .catch((error) => {
          console.log(error);
          res.status(400).json({
              message: "Error getting users"
          })
      })
  });

// Edit details of a single user
router.put("/:id/edit", (req, res) => {});

// Delete a single user
router.delete("/:id/delete", (req, res) => {});

router
  .route("/:id/creations")
  // Get details of a single user
  .get((req, res) => {
    knex
    .select(
      "user.id",
      "creation.id as creation_id",
      "challenge.name as challenge",
      "creation.name as creation_name",
      "creation.image_url",
      "category.name as category",
      "type.name as type"
    )
    .from("creation")
    .join("user", 'user.id', 'creation.created_by_id')
    .join("challenge", 'challenge.id', 'creation.challenge_id')
    .join("type", 'type.id', 'challenge.type_id')
    .join("category", "category.id", "type.category_id")
    .where(`user.id`, req.params.id)
    .then((creations) => {
        res.status(200).json(creations);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting challenges"
        })
    })
  });

  router
  .route("/:id/challenges")
  // Get details of a single user
  .get((req, res) => {
    knex
    .select(
      "user.id",
      "challenge.id as challenge_id",
      "challenge.name",
      "challenge.image_url",
      "category.name as category",
      "type.name as type"
    )
    .from("challenge")
    .join("user", 'user.id', 'challenge.created_by_id')
    .join("type", 'type.id', 'challenge.type_id')
    .join("category", "category.id", "type.category_id")
    .where(`user.id`, req.params.id)
    .then((creations) => {
        res.status(200).json(creations);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting challenges"
        })
    })
  });

module.exports = router;

