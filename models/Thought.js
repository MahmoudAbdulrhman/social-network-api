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

        toJSON: {
            virtuals: true,
            getters: true
        },

       reactions: [reactionSchema], 
    },  
);

const reactionSchema = new schema (
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody:{
            type: String,
            required: true,
            maxlength:280
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

thoughtSchema.virtual("reactionCount").get(()=> this.reactions.length)


// Create the Thought model using the thoughtSchema
const Thought = model('Thought',thoughtSchema);
n
// export the thought model
module.exports = Thought;