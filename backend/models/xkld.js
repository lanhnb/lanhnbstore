const mongoose = require("mongoose");

const xkldSchema = new mongoose.Schema(
  {
    namex: { type: String, required: true },
    categoryx: { type: String, required: true },
    companyx: { type: String, required: false },
    descriptionx: { type: String, required: true },
    reviewsx: { type: Number, required: false },
    timex: { type: Number, required: false },
    starsx: { type: Number, required: false },
    salaryx: { type: Number, required: false },
    ifox: { type: String, required: true },
    imagex: { type: Object, required: false },
   
  },
  { timestamps: true }
);

const Xkld = mongoose.model("Xkld", xkldSchema);

exports.Xkld = Xkld;
