let mongoose=require('mongoose');
let connectToDb=async(req,res)=>{
    mongoose.connect('mongodb://0.0.0.0:27017/resaurentdatabase')
    .then(() => console.log('Connected mongodb'))
    .catch(() => console.log('error in connecting mongodb'))

}
module.exports=connectToDb