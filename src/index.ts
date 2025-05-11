import express from 'express';
import userRoutes from './routes/user.route';
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({ origin: "*" }))

app.use('/users', userRoutes);
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
