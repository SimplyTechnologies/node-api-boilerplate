import mongoose from 'mongoose';

const User = mongoose.model('User');

export function getAllUsers(req, res) {

  return res.json({ title: 'Welcome message' });
}
