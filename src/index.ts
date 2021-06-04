import dotenv from "dotenv";
//import "./libs/mail"
dotenv.config();
import "./database"
import "express-async-errors";
import express ,{Request , Response , NextFunction} from "express";
import routers from "./routers";
import AppError from "./errors/AppError";
import uploadConfig from "./configs/upload"
import cors from "cors";
import { sendQueueMessageAddNewCategory } from "./libs/Queue";
import sendMessageAddNewCategory from "./jobs/sendMessageAddNewCategory";


    let expireIn = new Date();
    expireIn.setHours(expireIn.getHours() + 1)
    const dd = expireIn.getTime();

const app = express();

app.use(cors())
app.use(express.json())
// AVATAR
app.use("/files",express.static(uploadConfig.directory))
app.use(routers);

app.use( (error:Error , request:Request,response:Response , next:NextFunction) => {  
  if(error instanceof AppError) {
    console.log(error);
    return response.status(error.code).json({message:error.message})
  }
  console.log(error);

    
    return response.status(500).json({message:"Erro interno no servidor!"})
})

// app.get("/testes",async (req,res) => {
 
//   await sendQueueMessageAddNewCategory.add({categoryName:'PROFESSORES'})
//   return res.json({ok:true})
// })

const port = 3000;

app.listen(port , () => console.log(`Server is running port ${port}`));