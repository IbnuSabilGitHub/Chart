// Ambil data dari ThingSpeak menggunakan API
const apiUrl = 'https://api.thingspeak.com/channels/2538565/feeds.json?api_key=WXUH7ZC8TOQGZS7Z';


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
            localStorage.setItem('apiData', JSON.stringify(data)); // Simpan data ke Local Storage
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


fetchDataFromThingSpeak();