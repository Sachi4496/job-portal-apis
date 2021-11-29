const express = require('express');
const Company = require('../model/company.model');

const router = express.Router();

router.post("", async function (req, res) {
    try{
        const company = await Company.create(req.body);
        return res.status(200).send(company);
    }
    catch(err){
        return res.status(500).send(err);
    }
});

router.get("",async function (req, res) {
    try{
        const company = await Company.find().populate({path:"city_id", select:"city_name"}).lean().exec();
        return res.status(200).send(company);
    }
    catch(err){
        return res.status(500).send(err);
    }
})
router.get("/:id",async function (req, res) {
    try{
        const company = await Company.findById(req.params.id).populate({path:"city_id", select:"city_name"}).lean().exec();
        return res.status(200).send(company);
    }
    catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;