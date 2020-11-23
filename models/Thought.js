const { Schema, model,Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema (
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
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
);
const thoughtSchema = new Schema (
    {
    
        thoughtText:{
            type: String,
            required: true
            
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
    {
    toJSON: {
        virtuals: true,
        getters: true
     }
    }
);



// thoughtSchema.virtual("reactionCount").get(()=> this.reactions.length)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length});


// Create the Thought model using the thoughtSchema
const Thought = model('Thought',thoughtSchema);


// export the thought model
module.exports = Thought;