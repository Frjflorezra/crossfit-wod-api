const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TareaSchema = Schema ({
    title: String,
    description: String,
    state: String
})


module.exports = mongoose.model('Tarea', TareaSchema )
