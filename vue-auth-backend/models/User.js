const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    mobile: {
      type: String,
      required: true,
      match: /^\d{10}$/, // Ensure a 10-digit number
    },
    address: {
      village: {
        type: String,
        required: true,
        trim: true,
      },
      district: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      pincode: {
        type: String,
        required: true,
        match: /^\d{6}$/, // Ensure a 6-digit pincode
      },
    },
    bankDetails: {
      accountNumber: {
        type: String,
        required: true,
        trim: true,
      },
      bankName: {
        type: String,
        trim: true,
      },
      branchName: {
        type: String,
        trim: true,
      },
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
