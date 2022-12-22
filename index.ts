import express from 'express';
import diagnoseRouter from './routers/diagnoses';
const app = express();
app.use(express.json());


app.get('/api/ping', (_req, res) => {
  res.send('pong');
});
app.use('/api/diagnoses', diagnoseRouter);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});