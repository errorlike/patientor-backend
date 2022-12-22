import express from 'express';
import diagnoseRouter from './routers/diagnoses';
import patientRouter from './routers/patients';
import cors from 'cors';
const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());


app.get('/api/ping', (_req, res) => {
  res.send('pong');
});
app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRouter);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});