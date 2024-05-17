import { useEffect } from 'react';

const MyComponent = () => {
    // URL API ThingSpeak
    const apiUrl = 'https://api.thingspeak.com/channels/2538565/feeds.json?api_key=WXUH7ZC8TOQGZS7Z';

    // Fungsi untuk mengambil data terbaru dari ThingSpeak
    const fetchDataFromThingSpeak = () => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Mengubah respons ke format JSON
            })
            .then(data => {
                if (typeof window !== 'undefined' && window.localStorage) {
                    localStorage.setItem('apiData', JSON.stringify(data)); // Simpan data ke Local Storage
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            fetchDataFromThingSpeak();
        }
    }, []);

    return (
        <div>
            <h1>Fetch Data from ThingSpeak</h1>
            <p>Data is being fetched and stored in localStorage.</p>
        </div>
    );
};

export default MyComponent;
