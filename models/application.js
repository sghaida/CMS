/**
 * Created by sghaida on 5/11/2017.
 */

var mongo   = require('mongoose'),
    Schema  = mongo.Schema;

var applicationSchema = new Schema({
    name: String,
    description: String,
    imageUrl: {type: String, default: ''},
    creationDate: {type: Date, default: Date.now},
    isGlobal: {type: Boolean, default: false},
    owner: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Department'
        },
        name: String
    },
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        emailAddress: String
    },
    tags : [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
});

module.exports = mongo.model('Application', applicationSchema);