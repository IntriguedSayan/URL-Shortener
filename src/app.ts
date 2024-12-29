import express,{Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { urlRouter } from "./routes/urlShortener.routes";

dotenv.config();

let expressApp = express;

const app = expressApp();
app.use(cors());
app.use(express.json());

app.use("/api/urlshortener", urlRouter);

app.use((err:any, req:Request, res: Response, next: any)=>{
    res.status(err.status || 500).json({error:err.message || "Internal Server Error"});
})


app.get("/", (req:Request, res:Response) => {
    
    res.status(200).json({message:"Welcome"})

});


export {expressApp,app};

