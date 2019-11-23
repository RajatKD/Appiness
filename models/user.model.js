const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userId: String,
    name: String,
    role: { type: Schema.Types.ObjectId, ref: 'user-roles' }
});

module.exports = mongoose.model('users', user);