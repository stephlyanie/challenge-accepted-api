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
      "user.username",
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
  .post((req, res) => {});

router
  .route("/:id")
  // Get details of a single creation
  .get((req, res) => {});

// Edit details of a single creation
router.put("/:id/edit", (req, res) => {});

// Delete a single creation
router.delete("/:id/delete", (req, res) => {});

module.exports = router;
