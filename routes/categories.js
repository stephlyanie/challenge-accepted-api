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

router
.route("/:id/types")
// Get details of a single category
.get((req, res) => {
  knex
  .select(
    "category.id as category_id",
    "category.name as category_name",
    "type.id as id",
    "type.name as name",
  )
  .from("category")
  .join("type", 'type.category_id', 'category.id')
  .where(`category.id`, req.params.id)
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

