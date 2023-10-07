import mongoose from "mongoose";

const OrderShema = mongoose.Schema({

    name: {
        type: String,
    },

    price: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    ingredients: {
        type: Array,
        default: [],
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true,
    }
},
{
    timestamps: true
})

export default mongoose.model('Orders', OrderShema)