import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cors({origin: ['http://localhost:5173'],credentials:true}));
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('server is running!');
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
