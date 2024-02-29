const mongoose = require('mongoose');
const url='mongodb://localhost:27017/onvtech'

mongoose.connect(url);

const onvtech_users_Schema=mongoose.Schema({

    Name:String,
    email:String,
    phone:String,
    username:String,
    password:String
    
})

const onvtech_users_Model=mongoose.model('users',onvtech_users_Schema)
let u_db=onvtech_users_Model;

const onvtech_contact_Schema=mongoose.Schema({

    Name:String,
    email:String,
    phone:String,
    username:String,
    password:String
    
})

const onvtech_contact_Model=mongoose.model('contact',onvtech_users_Schema)
let c_db=onvtech_users_Model;
module.exports=u_db,c_db;






