import mongoose, { Schema, models } from "mongoose";

interface UserDocument {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "firstName is required"],
    },

    email: {
      type: String,
      require: [true, "email is required"],
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model<UserDocument>("User", userSchema);
export default User;
export type { UserDocument };
