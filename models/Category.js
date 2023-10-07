import mongoose from "mongoose";

const CategoryShema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    }
})

export default mongoose.model('Category', CategoryShema)







