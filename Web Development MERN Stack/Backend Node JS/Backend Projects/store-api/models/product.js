const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name must be provided'],
        trim: true,
        minlength: [3, 'Product name must be at least 3 characters'],
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided'],
        min: [0, 'Price cannot be negative'],
        validate: {
            validator: Number.isFinite,
            message: 'Price must be a valid number'
        }
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: null,
        min: [0, 'Rating cannot be less than 0'],
        max: [5, 'Rating cannot exceed 5'],
        validate: {
            validator: function (value) {
                if (value === null) return true;
                return Number.isFinite(value) && Math.abs(value - Math.round(value * 10) / 10) < 0.0001;
            },
            message: 'Rating must be a valid number with up to one decimal place or null'
        }
    },
    description: {
        type: String,
        trim: true,
        maxlength: [1000, 'Description cannot exceed 1000 characters'],
        default: ''
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity must be provided'],
        min: [0, 'Stock cannot be negative'],
        default: 0
    },
    category: {
        type: String,
        trim: true,
        maxlength: [50, 'Category cannot exceed 50 characters'],
        default: 'Uncategorized'
    },
    company: {
        type: String,
        required: [true, 'Company name must be provided'],
        trim: true,
        minlength: [2, 'Company name must be at least 2 characters'],
        maxlength: [50, 'Company name cannot exceed 50 characters']
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual field to display rating or "Not Rated"
productSchema.virtual('displayRating').get(function () {
    return this.rating === null ? 'Not Rated' : this.rating.toFixed(1);
});

// Index for efficient querying
productSchema.index({ name: 1 });
productSchema.index({ company: 1 });

module.exports = mongoose.model('Product', productSchema);