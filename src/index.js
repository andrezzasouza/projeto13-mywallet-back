import express from 'express';
import cors from 'cors';
import router from './routes/routerIndex.js';

const app = express();
app.use(cors());
app.use(json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});