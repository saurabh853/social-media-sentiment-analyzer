const express = require('express');
const cors = require('cors');
const axios = require('axios');
const tweetRoutes = require('./routes/tweets');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tweets', tweetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});