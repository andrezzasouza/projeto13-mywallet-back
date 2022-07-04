import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter.js';

const app = express();
app.use(cors());
app.use(json());
app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});