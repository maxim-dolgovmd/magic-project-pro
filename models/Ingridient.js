import mongoose from "mongoose";

const IngridientShema = mongoose.Schema({

    largePhotoUrl: {
        type: String,
        required: true
    },

    normalPhotoUrl: {
        type: String,
        required: true
    },
    
    mobilePhotoUrl: {
        type: String,
        required: true
    },

    previewPhotoUrl: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        default: 1
    }
}, 
{
    timestamps: true
})

export default mongoose.model('Ingridient', IngridientShema)