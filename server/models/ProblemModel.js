const mongoose = require('mongoose')

const problemSchema =  new mongoose.Schema({
    problemId: {
        type : Number,
        required : true
    },
    problemName : {
        type : String,
        required : true,
        unique : true
    },
    problemDescription : {
        type : String,
        required : true
    },
    problemTestcases: {
        type : String,
        required:true,
    },
    problemDifficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    problemTags: {
        type: [String],
        required: true
    },
    problemLink:{
        type: String,
        required: true
    }
})

const ProblemModel = mongoose.model('Problem',problemSchema)

module.exports = ProblemModel