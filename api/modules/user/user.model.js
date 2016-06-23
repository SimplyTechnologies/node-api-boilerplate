import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: Schema.Types.String,
  created: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

mongoose.model('User', userSchema);
