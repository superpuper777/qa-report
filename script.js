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

const verticalCtx = document
  .getElementById('verticalBarChart')
  .getContext('2d');

const verticalBarData = {
  labels: ['Android', 'iOS'],
  datasets: [
    {
      // label: '',
      data: [210, 153], // Данные для столбцов
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const links = ['https://www.android.com', 'https://www.apple.com'];

new Chart(verticalCtx, {
  type: 'bar', // Тип графика: столбчатый вертикальный
  data: verticalBarData,
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          padding: 15,
          // usePointStyle: true,
          // pointStyle: 'circle',
          // boxWidth: 15, // Размер кружка
          // boxHeight: 15, // Высота кружка
          generateLabels: function (chart) {
            const dataset = chart.data.datasets[0]; // Данные из первого набора
            return chart.data.labels.map((label, index) => ({
              text: `${label} - ${dataset.data[index]} (Details)`,
              fillStyle: dataset.backgroundColor[index],
              hidden: false,
              datasetIndex: 0,
              index: index,
            }));
          },
        },
        onClick: function (e, legendItem) {
          const index = legendItem.index; // Индекс выбранного элемента
          window.open(links[index], '_blank'); // Открывает соответствующую ссылку в новом окне
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
