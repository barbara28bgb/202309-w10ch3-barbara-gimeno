import mongoose from "mongoose";
import type WorkersStructure from "../workers/types.js";

const { Schema } = mongoose;

const WorkersSchema = new Schema<WorkersStructure>({
  work: {
    type: String,
    required: true,
  },
  items: {
    type: String,
    required: true,
  },
});

export const Workers = mongoose.model("workers", WorkersSchema);

export default WorkersSchema;
