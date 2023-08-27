import mongoose from "mongoose";

// mongoose.connect('mongodb://username:password@host:port/database?option...');
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw new Error("connection failed!");
    }
}

export default connect;