const Restaurant = require("../models/restaurantModel");
const factory = require("./handlerFactory");

exports.getRestaurantsByCuisine = async (req, res) => {
  try {
    const cuisineType = req.params.cuisine;
    const restaurants = await Restaurant.find({ cuisine: cuisineType });

    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: { restaurants },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getDelicatessenNotInBrooklyn = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" },
    })
      .select("cuisine name city -_id")
      .sort("name");

    res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: {
        restaurants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllRestaurants = factory.getAll(Restaurant);
exports.getRestaurant = factory.getOne(Restaurant);
exports.createRestaurant = factory.createOne(Restaurant);
exports.updateRestaurant = factory.updateOne(Restaurant);
exports.deleteRestaurant = factory.deleteOne(Restaurant);
