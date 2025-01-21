const ctx = document.getElementById('defectsChart').getContext('2d');

const defectsData = {
  labels: ['Critical', 'Major', 'Average', 'Minor', 'Enhancement'],
  datasets: [
    {
      label: 'The number of defects',
      data: [8, 12, 21, 44, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
      borderWidth: 5,
    },
  ],
};

new Chart(ctx, {
  type: 'doughnut',
  data: defectsData,
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          color: '#000',
          font: {
            size: 14,
          },
        },
      },
      datalabels: {
        // formatter: (value, ctx) => {
        //   const total = ctx.chart.data.datasets[0].data.reduce(
        //     (acc, cur) => acc + cur,
        //     0
        //   );
        //   const percentage = ((value / total) * 100).toFixed(1) + '%';
        //   return percentage;
        // },
        formatter: (value) => {
          return value + '%';
        },
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});
