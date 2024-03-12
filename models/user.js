const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const UserUpload = require("./useruploads.js");

const userSchema = new Schema({
    email: {
        type: String,
        required: true

    },
    role: {
        type: String,
        enum: ['admin', 'normal'],
        default: 'normal'
    },
    appliedSchemes: [{ type: String }],

    useruploads: [{
        type: Schema.Types.ObjectId,
        ref: "UserUpload",
    }],
});



userSchema.plugin(passportLocalMongoose);
userSchema.post("findOneAndDelete", async(user) => {
    if (user && user.useruploads.length > 0) { // Check if user uploads exist
        // Delete user uploads using their IDs
        await UserUpload.deleteMany({ _id: { $in: user.useruploads } });
    }
});



const User = mongoose.model('User', userSchema);

module.exports = User;