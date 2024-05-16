export const data = {
    labels: [],
    datasets: [
        {
            label: 'Temperature',
            data: [],
            borderColor: '#ff5470',
            backgroundColor: '#ff5470',
            pointHoverRadius: 5
        },
        {
            label: 'Humidity',
            data: [],
            borderColor: '#7f5af0',
            backgroundColor: '#7f5af0',
            pointHoverRadius: 5
        }
    ]
};

export const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        duration: 200,
        plugins: {
            legend: true,
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value'
                },
                type: 'logarithmic',
                min: 0,
                max: 100,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 10
                }
            }
        }
    }
};