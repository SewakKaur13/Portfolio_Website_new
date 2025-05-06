const express = require('express');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();


const getUserRoutes = require('./apis/route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));



// Mount routes

app.use('/api', getUserRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
