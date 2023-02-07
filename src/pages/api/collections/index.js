import dbConnect from "../../../utils/mongo";
import Collection from "../../../models/Collection";

export default async function handler (req, res) {
    const {method} = req;

    dbConnect();

    if(method === "GET") {
        try {
            const collections = await Collection.find().sort({createdAt: -1});
            res.status(200).json(collections);
        }catch(err) {
            res.status(500).json(err);
        }
    }

    if(method === "POST") {
        console.log('route for posting')
        try {
        const collection = await Collection.create(req.body);
        res.status(200).json(collection);
        }catch(err) {
            console.log(err)
            res.status(500).json(err);
        }
    }
}