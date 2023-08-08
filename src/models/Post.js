//import mongoose from 'mongoose';
var mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema(
    {
        name : {
            type: String,
            unique: true,
            required: true
        },
        email : {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);
export default mongoose.model("Post", postSchema);