const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true
  },
  lname:{
    type: String,
    required: true,
    trim: true
  },
  adh_no:{
    type: String,
    required: true,
    trim: true
  },
  mobile:{
    type: String,
    required: true
  }
},{
  
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);