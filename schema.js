// const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         price: Joi.number().min(0).required(),
//         location: Joi.string().required(),
//         country: Joi.string().required(),
//         image: Joi.object({
//             filename: Joi.string().optional(),
//             url: Joi.string().allow('').optional()
//         }).optional(),
//     }).required(),
// });


// // Define Joi schema for the Review model
// const reviewSchema = Joi.object({
//     review: Joi.object({
//         comment: Joi.string().required(),
//         rating: Joi.number().min(1).max(5).required(),
//     }).required(), // Set default value to current date if not provided})

// });

// module.exports.reviewSchema = reviewSchema;



const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().min(0).required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        image: Joi.object({
            filename: Joi.string().optional(),
            url: Joi.string().allow('').optional()
        }).optional(),
        documents: Joi.array().items(Joi.string()).optional(), // Add documents field
    }).required(),
});

// Define Joi schema for the Review model
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().min(1).max(5).required(),
    }).required(), // Set default value to current date if not provided
});



module.exports.userSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    role: Joi.string().valid('admin', 'normal').default('normal'),
    appliedSchemes: Joi.array().items(Joi.string()),
    useruploads: Joi.array().items(Joi.string()),
    password: Joi.string().required(), // Assuming useruploads is an array of ObjectId strings
});




module.exports.userUploadJoiSchema = Joi.object({
    applicantName: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().allow(''),
    createdAt: Joi.date().optional(),
    documents: Joi.array().items(Joi.object({
        name: Joi.string(),
        data: Joi.binary(),
        contentType: Joi.string()
    }).optional())
});