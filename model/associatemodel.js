const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// options: options.value,
//         name: name.value,
//         companyname: companyname.value,
//         natureofbusiness: natureofbusiness.value,
//         designation: designation.value,
//         mobilenumber: mobilenumber.value,
//         emailid: emailid.value,
//         address: address.value,
//         pincode: pincode.value,
//         message: message.value,

const associateSchema = new Schema({
    options: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    natureofbusiness: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('associatedetail', associateSchema);
