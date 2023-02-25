const { Schema, model } = require("mongoose");

const InfoSchema = new Schema({
  description: {
    type: String,
  },
  Person: {
    type: String,
  },
  Quantity: {
    type: String,
  },
  Discount: {
    type: String,
  },
  Total: {
    type: String,
  },
  Amount: {
    type: String,
  },
  State: {
    type: String,
  },
  Category: {
    type: String,
  },
  Profit: {
    type: String,
  },
});

const InfoModel = model("users", InfoSchema);

module.exports = InfoModel;
