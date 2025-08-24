import express from "express"
import cors from "cors"
import 'dotenv/config' 
import connectDB from "./configs/mongodb.js"
import { clerkWebhooks } from "./controllers/webhooks.js"
//initialize  express
const app=express()

// connect to db
await connectDB();
// await connectCloudinay();


//middlewares
app.use(cors())

//Routes
app.get('/', (req,res)=>{res.send("Edemy API is working fine!")})
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter);
app.use('/api/course', express.json(), courseRouter);
app.use('/api/user', express.json(), userRouter);
app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks);

//port nummber
const PORT =process.env.PORT||6000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})