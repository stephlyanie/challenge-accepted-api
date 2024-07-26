const express = require("express");
const router = express.Router();

const config = require("../knexfile.js");
const knex = require("knex")(config);

const { v4: uuidv4 } = require("uuid");

router
  .route("/")
  // Get list of challenges
  .get((req, res) => {
    knex
      .select(
        "challenge.id",
        "user.username",
        "user.image_url as profile_pic",
        "challenge.name",
        "category.name as category",
        "type.name as type",
        "challenge.description",
        "challenge.image_url"
      )
      .from("challenge")
      .join("user", "user.id", "challenge.created_by_id")
      .join("type", "type.id", "challenge.type_id")
      .join("category", "category.id", "type.category_id")
      .then((challenges) => {
        res.status(200).json(challenges);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          message: "Error getting challenges",
        });
      });
  })

  // Create/post a new challenge
  .post((req, res) => {
    // Generate new Id and save in variable
    const newId = uuidv4();

    knex("challenge")
      .insert({
        id: newId,
        name: req.body.name,
        description: req.body.description,
        created_by_id: req.body.created_by_id,
        type_id: req.body.type_id,
        image_url:
          "https://images.unsplash.com/photo-1510861320402-285a6c7639ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2228&q=80",
      })
      .catch((error) => {
        console.log(error);
      });

      // Send new Id in response
      res.send(newId)
  });

router
  .route("/:id")
  // Get details of a single challenge
  .get((req, res) => {
    knex
      .select(
        "challenge.id",
        "user.username",
        "user.image_url as profile_pic",
        "challenge.name",
        "category.name as category",
        "type.name as type",
        "challenge.description",
        "challenge.image_url"
      )
      .from("challenge")
      .join("user", "user.id", "challenge.created_by_id")
      .join("type", "type.id", "challenge.type_id")
      .join("category", "category.id", "type.category_id")
      .where(`challenge.id`, req.params.id)
      .then((creations) => {
        res.status(200).json(creations);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          message: "Error getting creations",
        });
      });
  });

// Edit details of a single challenge
router.put("/:id", (req, res) => {
  knex("challenge")
    .update({
      name: req.body.name,
      description: req.body.description,
      created_by_id: req.body.created_by_id,
      type_id: req.body.type_id,
    })
    .where("id", req.params.id)
    .then(() => {
      res.status(200).send("Challenge edited successfully");
    })
    .catch((error) => {
      res.status(404).send(`Error editing the challenge`);
      console.error(error);
    });
});

// Delete a single challenge
router.delete("/:id", (req, res) => {
  knex("challenge")
    .where("id", req.params.id)
    .del()
    .then(() => {
      res.status(204).json({"message": "Challenge successfully deleted."})
    })
    .catch(() => {
      res.status(500).json({"message": "Error deleting challenge."})
      console.error(error);
    })
});

// Get list of creations from a single challenge
router.route("/:id/creations").get((req, res) => {
  knex
    .select(
      "creation.id",
      "challenge.id as challenge_id",
      "challenge.name as challenge",
      "user.username",
      "user.image_url as profile_pic",
      "creation.name",
      "creation.image_url"
    )
    .from("creation")
    .join("user", "user.id", "creation.created_by_id")
    .join("challenge", "challenge.id", "creation.challenge_id")
    .where(`challenge.id`, req.params.id)
    .then((creations) => {
      res.status(200).json(creations);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "Error getting challenges",
      });
    });
});

module.exports = router;
