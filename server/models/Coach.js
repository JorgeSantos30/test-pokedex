import { Schema, model } from "mongoose";

const coachSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    numberPhone: {
      type: Number,
      required: true,
      default: 0,
    },
    medails: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Coach = model("Coach", coachSchema);

export { Coach };
