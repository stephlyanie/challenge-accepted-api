const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of creations
  .get((req, res) => {
    knex("creation")
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
