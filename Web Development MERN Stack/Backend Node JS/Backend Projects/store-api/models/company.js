const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Company name must be provided'],
    trim: true,
    unique: true,
    minlength: [2, 'Company name must be at least 2 characters'],
    maxlength: [50, 'Company name cannot exceed 50 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema);