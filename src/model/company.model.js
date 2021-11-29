const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
    {
    company_name:{ type: 'string',required: true},
    dec: { type: 'string',required: true},
    rating:{ type: 'Number',required: true},
    city_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:"city",
        requried: true,
    }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("company",companySchema);