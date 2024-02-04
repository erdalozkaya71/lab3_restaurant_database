const mongoose = require("mongoose");

// const autoIncrement = require('mongoose-auto-increment');

// // Initialize auto-increment plugin with the existing mongoose connection
// autoIncrement.initialize(mongoose.connection);

const addressSchema = new mongoose.Schema({
  building: {
    type: String,
  },
  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
  },
});

const restaurantSchema = new mongoose.Schema({
  address: {
    type: addressSchema,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  restaurant_id: {
    type: String,
    required: true,
    unique: true,
  },
});

// //Don't forget to install "npm install mongoose-auto-increment"
// restaurantSchema.plugin(autoIncrement.plugin, {
//   model: 'Restaurant',
//   field: 'id',
//   startAt: 1,
//   incrementBy: 1
// });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
