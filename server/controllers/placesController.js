const Place = require("../models/Place");

async function index(req, res) {
    const places = await Place.find();

    return res.status(200).json(places);
}

async function show(req, res) {
    const place = await Place.findById(req.body.placeId).populate("reviews");

    return res.json(place);
}

async function store(req, res) {
    try {
        const newPlace = await Place.create({
            name: req.body.name,
            description: req.body.description,
            // imgs: req.body.imgs,
            // coords: req.body.coords,
            // reviews: req.body.reviews
        });
        const place = await Place.findOne(newPlace);
        return res.status(200).json(place);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        await Place.findByIdAndUpdate(req.body.placeId, {
            name: req.body.name,
            description: req.body.description,
            // imgs: req.body.imgs,
            // coords: req.body.coords,
            // reviews: req.body.reviews
        });
        const packageToFront = await Place.findById(req.body.placeId);

        res.status(201).json(packageToFront);
    } catch (err) {
        res.status(404).json(err);
    }
}

async function destroy(req, res) {
    try {
        await Place.findByIdAndDelete(req.body.placeId);

        return res.status(200).send({ message: "Place deleted" });
    } catch (err) {
        return res.status(404).send({ message: "Something went wrong, try again later" });
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
