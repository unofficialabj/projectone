import mongoose from "mongoose";


const {Schema} = mongoose;

const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    post:{
        type: String,
        required: true,
    }
},{timestamps: true}
)

export default mongoose.model("PostDb", userSchema)