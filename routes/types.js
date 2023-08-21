const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of types
  .get((req, res) => {
    knex("type")
    .then((types) => {
        res.status(200).json(types);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting type"
        })
    })
  })


  // Create/post a new type
  .post((req, res) => {});

router
  .route("/:id")
  // Get details of a single type
  .get((req, res) => {});

// Edit details of a single type
router.put("/:id/edit", (req, res) => {});

// Delete a single type
router.delete("/:id/delete", (req, res) => {});

module.exports = router;

