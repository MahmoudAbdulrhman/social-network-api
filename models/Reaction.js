const mongoose = require('mongoose');
const { schema } = require('./User');
const dateFormat = require('../utils/dateFormat');


const reactionSchema = new schema (
    {
        reactionId:{

        },

        reactionBody:{
            type: String,
            required: true,

        },
        username:{
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
    }
);

// Create the Reaction model using the reactionSchema
const Reaction = model('Reaction',reactionSchema);

// export the reaction model
module.exports = Reaction;