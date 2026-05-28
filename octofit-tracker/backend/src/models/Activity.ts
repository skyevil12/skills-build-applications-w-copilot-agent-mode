import { Schema, model } from 'mongoose'

const activitySchema = new Schema(
  {
    userId: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: 'activities',
  },
)

export const Activity = model('Activity', activitySchema)
