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
  .get((req, res) => {});

// Edit details of a single user
router.put("/:id/edit", (req, res) => {});

// Delete a single user
router.delete("/:id/delete", (req, res) => {});

module.exports = router;

