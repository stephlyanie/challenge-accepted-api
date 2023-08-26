const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");
const { type } = require("@testing-library/user-event/dist/type/index.js");

router
  .route("/")
  // Get list of challenges
  .get((req, res) => {
    knex
    .select(
      "challenge.id",
      "user.username",
      "challenge.name",
      "category.name as category",
      "type.name as type",
      "challenge.description",
      "challenge.image_url"
    )
    .from("challenge")
    .join("user", 'user.id', 'challenge.created_by_id')
    .join("type", 'type.id', 'challenge.type_id')
    .join("category", "category.id", "type.category_id")
    .then((challenges) => {
        res.status(200).json(challenges);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting challenges"
        })
    })
  })


  // Create/post a new challenge
  .post((req, res) => {});

router
  .route("/:id")
  // Get details of a single challenge
  .get((req, res) => {
    knex
    .select(
      "challenge.id",
      "user.username",
      "challenge.name",
      "category.name as category",
      "type.name as type",
      "challenge.description",
      "challenge.image_url"
    )
    .from("challenge")
    .join("user", 'user.id', 'challenge.created_by_id')
    .join("type", 'type.id', 'challenge.type_id')
    .join("category", "category.id", "type.category_id")
    .where(`challenge.id`, req.params.id)
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

// Edit details of a single challenge
router.put("/:id/edit", (req, res) => {});

// Delete a single challenge
router.delete("/:id/delete", (req, res) => {});

// Get list of creations from a single challenge
router.route("/:id/creations")
  .get((req, res) => {
    knex
    .select(
      "creation.id as creation_id",
      "challenge.id as challenge_id",
      "user.username",
      "creation.name as creation_name",
      "creation.image_url"
    )
    .from("creation")
    .join("user", 'user.id', 'creation.created_by_id')
    .join("challenge", 'challenge.id', 'creation.challenge_id')
    .where(`challenge.id`, req.params.id)
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
