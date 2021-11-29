const express = require('express');
const City = require('../model/city.model');

const router = express.Router();

router.post("", async function (req, res) {
    try{
        const city = await City.create(req.body);
        return res.status(200).send(city);
    }
    catch(err){
        return res.status(500).send(err);
    }
});

router.get("",async function (req, res) {
    try{
        const city = await City.find().lean().exec();
        return res.status(200).send(city);
    }
    catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;