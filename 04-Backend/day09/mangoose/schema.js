import { Timestamp } from "mongodb"
import mongoose from "mongoose"
import { trim } from "validator"


const schema = mongoose.Schema({
    name:{
        type : String,
        minLength:3,
        maxLenght:20,
        trim:true,
        require :true
    },
    accountNo:{
        type : Number,
        length:5,
        require :true,
        trim: true
    },
    address:{
        type : String,
        minLength:3,
        maxLenght:20,
        trim:true
    },
    age:{
        type : Number,
        min : 18,
        max : 100
    },
    balance:{
        type : Number,
        min : 0,
        require : true
    },
    accountType:{
        type : String,
        require: true
    }
},{Timestamp:true})

const constomer = mongoose.model("bank",schema);

export default constomer;