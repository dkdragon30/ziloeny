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

const Associate = require('../model/associatemodel');
const mongoose = require('mongoose');

const addassociatedetail = async (req, res, next) => {
    try {

        const associate = new Associate({
            options: req.body.options,
            name: req.body.name,
            companyname: req.body.companyname,
            natureofbusiness: req.body.natureofbusiness,
            designation: req.body.designation,
            mobilenumber: req.body.mobilenumber,
            emailid: req.body.emailid,
            address: req.body.address,
            pincode: req.body.pincode,
            message: req.body.message,
        });
        associate.save()
            .then(result => {
                res.status(200).json({ status: true });
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

module.exports = {addassociatedetail};