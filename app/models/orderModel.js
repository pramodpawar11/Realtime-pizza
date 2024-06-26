const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    items:{
        type:Object,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    paymentType:{
        type:String,
        default:"COD"
    },
    status:{
        type:String,
        default:"Order_placed"
    }
},{timestamps:true});
const Order = mongoose.model("order",orderSchema);
module.exports = Order;