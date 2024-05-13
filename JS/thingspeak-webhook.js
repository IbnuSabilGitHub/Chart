const express = require('express');
const app = express();
const port = 3000;

// Endpoint untuk menerima permintaan GET dari ThingHTTP
app.get('/thingspeak-webhook', (req, res) => {
    const data = req.query.data; // Mendapatkan nilai data dari query string

    console.log('Data yang diterima dari ThingSpeak (GET):', data);

    // Lakukan operasi lain sesuai kebutuhan dengan data yang diterima
    // Misalnya, simpan data ke database, lakukan pemrosesan, dll.

    res.send('Permintaan GET berhasil diterima');
});

// Menjalankan server pada port yang telah ditentukan
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});
