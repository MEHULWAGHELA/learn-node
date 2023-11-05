const mongoose = require('mongoose')

const db = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/myfirstproject', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB Connected Successfully", conn.connection.host)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = db