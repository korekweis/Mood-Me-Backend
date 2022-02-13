import mongoose from 'mongoose';

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