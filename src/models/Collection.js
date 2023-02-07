import mongoose from 'mongoose';

const CollectionSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    title: {
    type: String,
    required: true
    },
    artImg: {
        type: String,
       default: ""
    },
    location: {
        type: String,
        required: false
    },
    policy: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    supply: {
        type: String,
        required: true
    },
    mintingDetail: {
        type: String,
        required: false
    },
    aboutMe: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    instagram: {
        type: String,
        required: false
    },
    discord: {
        type: String,
        required: false
    },
    locationImg: {
        type: String,
        default: ""
    },
    personalImg: {
        type: String,
        default: ""
    }
    
}, {timestamps: true})

export default mongoose.models.Collection || mongoose.model('Collection', CollectionSchema)