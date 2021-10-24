import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to our online shop API...');
});

// app.get('/products', (req, res) => {
//   res.send(products);
// });

const port = process.env.PORT || 3333;
app.listen(port);
