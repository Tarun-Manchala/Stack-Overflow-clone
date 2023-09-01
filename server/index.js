import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app =express();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("This is a stack overflow clone project")
})

const PORT = process.env.PORT || 5000
 
const CONNECTION_URL="mongodb+srv://Tarun_Manchala:Mongodb@6420@stack-clone-pro.qk4vxh7.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL ,{useNewParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT, () => {console.log('Database Connected running on ${PORT}')}))
.catch((err) => console.log(err.message))