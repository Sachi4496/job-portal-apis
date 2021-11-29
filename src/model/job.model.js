const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    { 
    skills:{ type: 'string',required: true},
    work:{ type: 'string',required: false},
    notice_pre:{ type: 'Number',required: false},
    company_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"company",
        requried: true,
    },
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

module.exports = mongoose.model("job",jobSchema);