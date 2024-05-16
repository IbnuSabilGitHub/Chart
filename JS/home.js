import * as chartTemperatureHumidity from './chart/TemperatureAndHumidity.js';
import '../api/fetchingData.js';


function getStoredData() {
    const storedData = localStorage.getItem('apiData');
    if (storedData) {
        return JSON.parse(storedData); // Parsing data dari JSON
    }
    return null; // Mengembalikan null jika tidak ada data yang tersimpan
}

// Contoh penggunaan
const apiData = getStoredData();
console.log(apiData);

const ctxTH = document.getElementById('Temperature&Humidity');
function insertData() {
    apiData.feeds.forEach(data => {
        chartTemperatureHumidity.data.labels.push(new Date(data.created_at).toLocaleString());
        chartTemperatureHumidity.data.datasets[0].data.push(data.field1);
        chartTemperatureHumidity.data.datasets[1].data.push(data.field2);
    });
}

insertData();


const chartTH = new Chart(ctxTH,chartTemperatureHumidity.config);
