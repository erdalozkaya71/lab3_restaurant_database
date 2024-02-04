const express = require("express");
const restaurantController = require("../controllers/restaurantController");

const router = express.Router();

router
  .route("/")
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route("/cuisine/:cuisine")
  .get(
    restaurantController.getRestaurantsByCuisine,
    restaurantController.getAllRestaurants
  );

router
  .route("/Delicatessen")
  .get(restaurantController.getDelicatessenNotInBrooklyn);

router
  .route("/:id")
  .get(restaurantController.getRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = router;
