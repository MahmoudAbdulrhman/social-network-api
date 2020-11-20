const { Schema, model } = require('mongoose');


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
      thoughts: [thoughtSchema],
      friends: [friendSchema]

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
  return this.friends.reduce((total, friend) => total );
});

// Create the username model using the userSchema
const Username = model('Username',userSchema);

// export the username model
module.exports = User;