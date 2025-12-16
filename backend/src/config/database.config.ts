import mongoose from "mongoose"
import { config } from "./app.config"

const connectionDatabase = async () => {
    try {
        const db = await mongoose.connect(config.MONGO_URL);
        console.log("✅ ✅ ✅ Database connected successfully. ✅ ✅ ✅");
        
    } catch (error) {
        console.log("❌❌❌ Error connecting to database ❌❌❌", error);
        process.exit(1)
    }
}

export default connectionDatabase;