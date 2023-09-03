const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of types
  .get((req, res) => {
    knex
    .select(
      "type.id",
      "type.name",
      "type.category_id",
      "category.name as category_name"
    )
    .from("type")
    .join("category", 'category.id', 'type.category_id')
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
  .get((req, res) => {
    knex
    .select(
      "type.id",
      "type.name",
      "type.category_id",
      "category.name as category_name"
    )
    .from("type")
    .join("category", 'category.id', 'type.category_id')
    .where(`type.id`, req.params.id)
    .then((type) => {
        res.status(200).json(type);
    })
  .catch((error) => {
    console.error(error);
    res.status(400).json({
        message: "Error getting challenges"
    })
  })
});

// Edit details of a single type
router.put("/:id/edit", (req, res) => {});

// Delete a single type
router.delete("/:id/delete", (req, res) => {});

module.exports = router;

