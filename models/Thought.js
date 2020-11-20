const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema (
    {
    
        thoughtText:{
            type: String,
            required: true,
            validate: [({ length }) => length >= 1 , 'Password should be longer.']
        },

        createAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true
        },

       reactions: [reactionSchema], 
    },  
);


// Create the Thought model using the thoughtSchema
const Thought = model('Thought',thoughtSchema);

// export the thought model
module.exports = Thought;