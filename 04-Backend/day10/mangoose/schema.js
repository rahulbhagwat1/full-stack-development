
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
        required: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true,
        min: 10,
        max: 1000000
    },
    city: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    balance: {
        type: Number,
        min: 0,
        required: true
    },
    accountType: {
        type: String,
        required: true,
        enum: ["current", "saving"]
    }
}, { timestamps: true });

const customer = mongoose.model("customer", schema);

export default customer;
  