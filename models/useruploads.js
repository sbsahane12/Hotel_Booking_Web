const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userUploadSchema = new Schema({
    applicantName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    documents: [{
        name: String,
        data: Buffer,
        contentType: String
    }]
});

const UserUpload = mongoose.model("UserUpload", userUploadSchema);
module.exports = UserUpload;