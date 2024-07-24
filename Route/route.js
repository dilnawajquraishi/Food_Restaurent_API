let express=require('express');
const { neworder, findItem } = require('../controllers/presentauth');
const { ongoingorder,ongoingalldata } = require('../controllers/ongoingorderauth');
const { pastorder, pastorderdata } = require('../controllers/pastorderauth');
const{ createdeliveryarea, getalldeliverydata} = require('../controllers/Deliveryareaauth');
const { createarea } = require('../controllers/addarea.auth');
const { getallareadata } = require('../controllers/addarea.auth');
const { registerUser, loginUser } = require('../controllers/userauth');

let router=express.Router();

// user signin
router.post('/register', registerUser)
// user login
router.post('/login', loginUser)

//present  item details
router.post('/neworder', neworder)
router.get('/newordergealldata', findItem)

//ongoing  item details
router.post('/ongoing',ongoingorder )
router.get('/ongoingalldata',   ongoingalldata)

//past auth details
router.post('/pastorder', pastorder)
router.get('/pastalldata',   pastorderdata)

// delivery area selection 
router.post('/selectdeliveryarea',createdeliveryarea)
router.get('/getalldeliverydata',getalldeliverydata)


// router add area 
router.post('/addarea',createarea)
router.get('/getalladdarea',getallareadata)


module.exports=router