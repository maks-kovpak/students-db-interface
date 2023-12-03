import mongoose, { Schema } from 'mongoose';

const StudentSchema = new Schema({
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  birthday: { type: Date },
  group_number: { type: Number },
});

export default mongoose.model('Student', StudentSchema, 'students');
