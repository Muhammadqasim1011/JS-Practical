function generateCharts() {
    const numCharts = Number(document.getElementById('numCharts').value);
    const chartsContainer = document.getElementById('chartsContainer');
    chartsContainer.innerHTML = ''; // Clear any existing charts

    for (let i = 1; i <= numCharts; i++) {
        const labels = prompt(`Enter labels for Chart ${i} (comma-separated):`).split(',').map(label => label.trim());
        const data = prompt(`Enter data for Chart ${i} (comma-separated):`).split(',').map(value => parseFloat(value.trim()));
        const colors = prompt(`Enter colors for Chart ${i} (comma-separated, optional):`).split(',').map(color => color.trim());

        // Create a new chart container
        const chartContainer = document.createElement('div');
        chartContainer.className = 'chart-container';
        chartContainer.innerHTML = `<canvas id="chart${i}"></canvas>`;
        chartsContainer.appendChild(chartContainer);

        // Initialize the chart
        const ctx = document.getElementById(`chart${i}`).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: `Chart ${i}`,
                    data: data,
                    backgroundColor: colors.length ? colors : 'rgba(75, 192, 192, 0.2)',
                    borderColor: colors.length ? colors.map(color => color.replace('0.2', '1')) : 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
