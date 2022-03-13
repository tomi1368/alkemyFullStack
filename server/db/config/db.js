import mongoose from "mongoose";


const connectDB = mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(res=>console.log(`Conneted to Mongo`))
    .catch(err=>console.log(err))


export default connectDB