let mongoose = require ("mongoose")
let connectDB =async() =>{
try {
    await mongoose.connect(process.env.db)
    console.log("db is connected")
} catch (error) {
    console.log(error.message)   
}
}
module.exports = connectDB