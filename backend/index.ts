import express,{Request,Response,json,Express} from 'express';
import dotenv from 'dotenv';


const app: Express = express();

dotenv.config();
app.use(express.json());
const PORT= process.env.PORT;



app.get('/test', (req:Request, res:Response) => {
  	res.send({message:"sup"});
});

app.listen(PORT, () => {
	console.log(`TypeScript with Express http://localhost:${PORT}/`);
});
 