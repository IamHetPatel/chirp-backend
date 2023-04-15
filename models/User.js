const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 2,
        max: 20,
        unique: true
    },
    email:{
        type: String,
        required: true,
        max: 30,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    profilePic:{
        type: String,
        default:""
    },
    coverPic:{
        type: String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type: String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
},
{timestamps:true}
)

module.exports = mongoose.model("User",UserSchema)