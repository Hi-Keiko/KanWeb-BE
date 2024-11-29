const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Mengimpor userRoutes

app.use(express.json()); // Untuk parsing JSON body
app.use('/api', userRoutes); // Menambahkan prefix '/api' pada route login

// Menjalankan server pada port yang ditentukan
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});