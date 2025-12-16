import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  profilePicture?: string | null;
  isActive: boolean;
  lastLogin: Date | null;
  updatedAt: Date;
  createdAt: Date;
  currentWorkspace: mongoose.Types.ObjectId | null;
  comparePassword(value: string): Promise<boolean>;
  omitPassword(): Omit<UserDocument, "password">;
}


const userSchema = new Schema<UserDocument>({
    
})
