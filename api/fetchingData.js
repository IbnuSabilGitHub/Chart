// Ambil data dari ThingSpeak menggunakan API
const apiUrl = 'https://api.thingspeak.com/channels/...../feeds.json?api_key=?.......';
let channelData = []; // Variabel untuk menyimpan data dari API ThingSpeak


// Fungsi untuk mengambil data terbaru dari ThingSpeak
function fetchDataFromThingSpeak() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Mengubah respons ke format JSON
        })
        .then(data => {
            // Cek apakah terdapat perubahan data
            const newFeeds = data.feeds.filter(feed => {
                // Filter hanya entri yang belum ada di channelData
                return !channelData.some(existingFeed => existingFeed.entry_id === feed.entry_id);
            });

            // Tambahkan entri baru ke channelData
            channelData.push(...newFeeds);

            console.log('Updated Data from ThingSpeak:', channelData);

            // Sekarang Anda dapat melakukan sesuatu dengan data terbaru
            processUpdatedData(newFeeds);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Fungsi untuk memproses data terbaru
function processUpdatedData(newData) {
    // Lakukan sesuatu dengan data terbaru, misalnya tampilkan di halaman web
    newData.forEach(feed => {
        console.log(`New Entry - Created At: ${feed.created_at}, Field Value: ${feed.field1}`);
    });
}

// Panggil fetchDataFromThingSpeak() secara berkala setiap 10 detik
setInterval(fetchDataFromThingSpeak, 10000); // 10 detik (10000 milidetik)
