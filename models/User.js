const { Schema, model } = require('mongoose');
const Thought = require('./Thought');


const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true,
        unique:true
      },
      email: {
        type: String,
        required: true,
        unique:true,
        match:[/.+@.+\..+/]

      },
      thoughts: [{
        type:Schema.Types.ObjectId,
        ref:"Thought"
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }]


    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  )

//get total count of frinds  retrieval
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the username model using the userSchema
const User = model('User',userSchema);

// export the username model
module.exports = User;