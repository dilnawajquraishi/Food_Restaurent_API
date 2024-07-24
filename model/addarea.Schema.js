let mongoose=require('mongoose')
let DeliverySchema=new  mongoose.Schema({
  area:{
        type:String,
        required:true,
    }

})
module.exports=mongoose.model('area',DeliverySchema)