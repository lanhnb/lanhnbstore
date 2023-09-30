const mongoose = require("mongoose");

const nhaDatSchema = new mongoose.Schema(
  {
    named: { type: String, required: true },
    categoryd: { type: String, required: true },
    companyd: { type: String, required: false },
    descriptiond: { type: String, required: true },
    priced: { type: Number, required: true },
    priceOffd: { type: Number, required: true },
    reviewsd: { type: Number, required: false },
    starsd: { type: Number, required: false },
    huongd: { type: String, required: false },
    imaged: { type: Object, required: false },
   
  },
  { timestamps: true }
);

const NhaDat = mongoose.model("NhaDat", nhaDatSchema);

exports.NhaDat = NhaDat;
