const mongoose = require('mongoose');

const userRatingSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product must be provided']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User must be provided']
  },
  rating: {
    type: Number,
    required: [true, 'Rating must be provided'],
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot exceed 5'],
    validate: {
      validator: function (value) {
        // Check if value is a number and, when rounded to 1 decimal place, is unchanged
        return Number.isFinite(value) && Math.abs(value - Math.round(value * 10) / 10) < 0.0001;
      },
      message: 'Rating must be a valid number with up to one decimal place'
    }
  }
}, {
  timestamps: true
});

// Ensure unique rating per user per product
userRatingSchema.index({ product: 1, user: 1 }, { unique: true });

// Index for efficient querying by product
userRatingSchema.index({ product: 1 });

module.exports = mongoose.model('UserRating', userRatingSchema);