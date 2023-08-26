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
      "challenge.name as challenge_name",
      "category.name as category",
      "type.name as type",
      "challenge.description"
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
    knex("challenge")
    .where(`id`, req.params.id)
    .then((challenge) => {
        res.status(200).json(challenge);
    })
  });

// Edit details of a single challenge
router.put("/:id/edit", (req, res) => {});

// Delete a single challenge
router.delete("/:id/delete", (req, res) => {});

module.exports = router;
