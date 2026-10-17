
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    email: {
        required: true,
        type : String
    },
    password: {
        type :  String
    }
}, { timestamps: true });

const user = mongoose.model("user", schema);

export default user;