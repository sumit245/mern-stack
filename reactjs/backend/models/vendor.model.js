const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const vendorSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, minLength: 5, maxLength: 40, required: true },
    vendor_id: { type: String },
    profile_picture: { type: String },
    status: {
        type: String,
        default: 'active',
        lowercase: true,
        enum: {
            values: ['active', 'inactive'],
            message: '{VALUE} is not valid'
        }
    },
    featured: Boolean,
    email: {
        type: String,
        required: [true, 'Vendor email is required'],
        unique: true,
        validate: {
            validator: function (email) {
                return /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
            },
            message: (email) => `${email.value} is not a valid email`
        }
    },
    password: { type: String, required: true },
    phone: {
        type: String,
        validate: {
            validator: function (phone) {
                return /\d{10}/.test(phone);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'Vendor phone number required']
    },
    commission: Number
}, {
    timestamps: true
})

// vendorSchema.pre('save', () => {
//     this.password = bcrypt.hashSync(this.password, 10)
// })

const Vendor = mongoose.model('Vendor', vendorSchema)

module.exports = Vendor;
