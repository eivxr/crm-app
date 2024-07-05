const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
  },
  precio: {
    type: Number,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Producto", productoSchema);
