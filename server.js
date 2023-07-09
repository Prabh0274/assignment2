const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
//mongodb+srv://prabh:<@Prabh7814617231>@cluster0.0fpexll.mongodb.net/sportstore?retryWrites=true&w=majority    
mongoose.connect("mongodb+srv://prabh28868:Prabh8847256693@cluster0.r7fo8qu.mongodb.net/DressStore?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

const productsRouter = require('./routes/products.js');
app.use('/api/products.js', productsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Dress Store Application' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});