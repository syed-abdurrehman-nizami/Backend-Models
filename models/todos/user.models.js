import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: [true, "Password is mandatory to proceed"],
      minlength: 6,
      match: /^[a-zA-Z0-9_.]+$/, // this only allow numbers, letters, underscores and dot
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
