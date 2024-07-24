let Deliveryshcema=require('../model/DeliveryareaSchema')
let createdeliveryarea=async(req,res)=>{
   try {
    let {state,city}=req.body;
    let newdeliveryareaselect=await  Deliveryshcema.create({
        state,
        city 
    })
    return res.status(200).json({success:true,message:"Delivery area selected successfully",newdeliveryareaselect})
   } catch (error) {
    return res.status(200).json({success:false,error:error.message})

   }            

}
let getalldeliverydata=async(req,res)=>{
    try {
        let getdata=await  Deliveryshcema.find()
        res.status(200).json({
            data:getdata,
            success:true,
            error:true,
            message:"Receive all data",


        })
    } catch (error) {
        res.status(400).json({
            success:false.valueOf,error:error.message
        })
    }
}
module.exports={
createdeliveryarea,
getalldeliverydata
}