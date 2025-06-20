const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    institution: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    ampc_number: {
      type: String,
      default: "",
      trim: true,
    },
    specialization: {
      type: String,
      required: true,
      enum: ["Pulmonologist", "Rheumatology", "Other"],
    },
    other_specialization: {
      type: String,
      trim: true,
      default: "",
    },
    mobile: {
      type: String,
      required: true,
 
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
