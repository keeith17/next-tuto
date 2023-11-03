import mongoose from "mongoose";

const { Schema } = mongoose;

const newPostSchema = new Schema(
    {
        title: {
            type: String,
            unique: false,
        },
        desc: {
            type: String,
            unique: false,
        },
        img: {
            type: String,
            required: false,
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.NewPost ||
    mongoose.model("NewPost", newPostSchema);
