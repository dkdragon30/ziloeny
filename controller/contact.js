const Contact = require('../model/contactmodel');
const mongoose = require('mongoose');

const addContact = async (req, res, next) => {
    try {

        const contact = new Contact({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
            email: req.body.email,
            state: req.body.state,
            pincode: req.body.pincode,
            message: req.body.message
        });
        contact.save()
            .then(result => {
                res.status(200).json({ status: true });
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

module.exports = {addContact};