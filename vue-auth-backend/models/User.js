const mongoose = require('mongoose');

// Address sub-schema
const addressSchema = new mongoose.Schema({
  village: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true }
});

// BankDetails sub-schema
const bankDetailsSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true },
  bankName: { type: String, required: true },
  branchName: { type: String, required: true }
});

// Main user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: String, required: true },
  adharno: {type: String, required: true },
  address: addressSchema,
  bankDetails: bankDetailsSchema
});

// Create the model
const User = mongoose.model('User', userSchema);
module.exports = User;
