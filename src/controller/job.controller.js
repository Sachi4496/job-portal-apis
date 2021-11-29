const express = require('express');
const Job = require('../model/job.model');

const router = express.Router();

router.post("", async function (req, res) {
    try{
        const job = await Job.create(req.body);
        return res.status(200).send(job);
    }
    catch(err){
        return res.status(500).send(err);
    }
});

router.get("",async function (req, res) {
    try{
        const job = await Job.find().populate({path:"company_id", select:"comapnay_name notic_pre dec rating "}).populate({path:"city_id", select:"city_name"}).lean().exec();
        return res.status(200).send(job);
    }
    catch(err){
        return res.status(500).send(err);
    }
})
router.get("/wfh",async function (req, res) {
    try{
        const job = await Job.find({"work":{$eq:"work from home"}}).populate({path:"company_id", select:"comapnay_name notic_pre dec rating "}).populate({path:"city_id", select:"city_name"}).lean().exec();
        return res.status(200).send(job);
    }
    catch(err){
        return res.status(500).send(err);
    }
})
router.get("/period",async function (req, res) {
    try{
        const job = await Job.find().lean().populate({path:"company_id", select:"notice_pre"}).populate({path:"company_id", select:"comapnay_name notic_pre dec rating "}).populate({path:"city_id", select:"city_name"}).exec();
        return res.status(200).send(job);
    }
    catch(err){
        return res.status(500).send(err);
    }
})
router.get("/skill/:id",async function (req, res) {
    try{
        // const job = await Job.find({$and:[{"skills":{$eq:"Python devloper"}},{"city_name":{$eq:"Bangalore"}}]}).lean().exec();
        const job = await Job.findById(req.params.id).lean().exec();
        return res.status(200).send(job);
    }
    catch(err){
        return res.status(500).send(err);
    }
})

// router.get("/sort",async function (req, res) {
//     try{
//         const job = await Job.find().sort({"rating":-1}).lean().exec();
//         return res.status(200).send(job);
//     }
//     catch(err){
//         return res.status(500).send(err);
//     }
// })
// router.get("/dec/:id",async function (req, res) {
//     try{
//         const job = await Job.findById(req.params.id).lean().exec();
//         return res.status(200).send(job);
//     }
//     catch(err){
//         return res.status(500).send(err);
//     }
// })

module.exports = router;