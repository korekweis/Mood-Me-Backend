import mongoose from 'mongoose';
import Int32 from "mongoose-int32";
// const Int32 = require("mongoose-int32").loadType(mongoose);

const restaurantSchema = mongoose.Schema({ 
    address: { 
        building: String, 
        street: String
    }, 
    cuisine: String,
    grades: [{
        date: Date, 
        grade: String, 
        score: Number
    }],
    name: String, 
    restaurant_id: String
});

export default mongoose.model('samplecollections', restaurantSchema);