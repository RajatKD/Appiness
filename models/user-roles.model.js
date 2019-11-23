const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    roleName: String
});

module.exports = mongoose.model('user-roles', user);