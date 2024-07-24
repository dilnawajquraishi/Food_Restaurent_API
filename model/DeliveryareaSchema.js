let mongoose=require('mongoose')
let DeliverySchema=new  mongoose.Schema({
  state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('Deliveryarea',DeliverySchema)