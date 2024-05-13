export const config = {
    type: 'line',
    data: variabel,
    options: {
        responsive: true,
        duration: 200,
        interaction: {
            intersect: true
        },
        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Temperature And Humidity'
            }
        }
    }
}

export const variabel = {
    labels: [],
    datasets: [
        {
            label: 'Temperature',
            data: [],
            borderColor: '#02f775',
            backgroundColor: '#b7bdba',
            pointStyle: 'circle',
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 1
        },
        {
            label: 'Temperature',
            data: [],
            borderColor: '#00f7ff',
            backgroundColor: '#b7bdba',
            pointStyle: 'circle',
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 1
        }
    ]
};