const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const connectionURL = process.env.MONGODB_URL

mongoose.connect(connectionURL, { 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
})