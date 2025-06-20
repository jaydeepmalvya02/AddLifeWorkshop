const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const registerRoutes =require('./routes/userRoutes')


dotenv.config()
const app=express()
app.use(express.json())
app.use(cors());
const port=7000



const connectDb = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  await mongoose.connect(`${process.env.MONGO_URI}`);
};
connectDb()
app.use("/api", registerRoutes);
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);