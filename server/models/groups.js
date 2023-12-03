import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  group_number: { type: Number },
});

export default mongoose.model('Group', GroupSchema, 'groups');
