const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of categories
  .get((req, res) => {
    knex("category")
    .then((categories) => {
        res.status(200).json(categories);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Error getting categories"
        })
    })
  })


  // Create/post a new category
  .post((req, res) => {});

router
  .route("/:id")
  // Get details of a single category
  .get((req, res) => {});

// Edit details of a single category
router.put("/:id/edit", (req, res) => {});

// Delete a single category
router.delete("/:id/delete", (req, res) => {});

module.exports = router;

