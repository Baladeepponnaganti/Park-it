import mongoose from "mongoose";
const parkingSchema = new mongoose.Schema(
    {
        ownerId : String, 
        name : String,
        pricePerHour: Number,
        images: [String],
        document: String,
        verified: { type: Boolean, default: false },
        location: {
            type: { type: String, enum: ["Point"], default: "Point" },
            coordinates: { type: [Number], required: true } // [lng, lat]
            }
    }
);
parkingSchema.index({location : "2dsphere"});
const Parking= mongoose.model("Parking" , parkingSchema);    

export default Parking;