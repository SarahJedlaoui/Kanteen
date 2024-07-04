// models/Media.js
import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  mediaType: { type: String, required: true },
  mediaURL: { type: String, required: true },
  rating: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Media || mongoose.model('Media', MediaSchema);
