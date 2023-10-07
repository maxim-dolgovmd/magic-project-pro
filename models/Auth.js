import mongoose from "mongoose";

const AuthShema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    passwordHash: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

export default mongoose.model('Auth', AuthShema)