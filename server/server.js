
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const equipoRoutes = require('./routes/equipoRoutes');
const movimientoRoutes = require('./routes/movimientoRoutes');

// Use Routes
app.use('/api/equipos', equipoRoutes);
app.use('/api/movimientos', movimientoRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/labtrack')
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection error: ", error));
    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    