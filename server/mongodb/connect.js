import mongoose from 'mongoose';
import monsoose from 'mongoose';

const connectDB = (url) =>{
    monsoose.set('strictQuery',true)
    mongoose.connect(url)
    .then(()=> console.log("MongoDB connected"))
    .catch((err) => console.log(err))
}


export default connectDB;