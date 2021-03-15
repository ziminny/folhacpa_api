import dotenv from "dotenv";
//import "./libs/mail"
dotenv.config();
import "./database"
import "express-async-errors";
import express ,{Request , Response , NextFunction} from "express";
import routers from "./routers";
import AppError from "./errors/AppError";
import uploadConfig from "./configs/upload"

    let expireIn = new Date();
    expireIn.setHours(expireIn.getHours() + 1)
    const dd = expireIn.getTime();

const app = express();


app.use(express.json())
app.use("/files",express.static(uploadConfig.directory))
app.use(routers);

app.use( (error:Error , request:Request,response:Response , next:NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.code).json({message:error.message})
  }
  console.log(error);
  
    return response.status(500).json({message:"Erro interno no servidor!"})
})

const port = 3334;

app.listen(port , () => console.log(`Server is running port ${port}`));