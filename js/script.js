const ctx = document.getElementById('defectsBySeverity').getContext('2d');

// Общее количество задач
const totalTasks = 200;

// Количество задач в каждой категории
const bugs = 5;
const featureRequests = 25;
const improvements = 50;
const others = 30;

// Функция для расчета процента
function calculatePercentage(categoryTasks, totalTasks) {
  return ((categoryTasks / totalTasks) * 100).toFixed(2); // округляем до 2 знаков после запятой
}

// Расчет процентов
const bugsPercentage = calculatePercentage(bugs, totalTasks);
const featureRequestsPercentage = calculatePercentage(
  featureRequests,
  totalTasks
);
const improvementsPercentage = calculatePercentage(improvements, totalTasks);
const othersPercentage = calculatePercentage(others, totalTasks);

const newData = [
  bugsPercentage,
  featureRequestsPercentage,
  improvementsPercentage,
  othersPercentage,
];

const defectsData = {
  labels: ['Critical', 'Major', 'Average', 'Minor'],
  datasets: [
    {
      label: 'The number of defects',
      data: newData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
      borderWidth: 3,
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
            size: 9,
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
          size: 8,
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

const ctx2 = document.getElementById('defectsBySmth').getContext('2d');

const defectsData2 = {
  labels: ['Critical', 'Major', 'Minor'],
  datasets: [
    {
      label: 'The number of defects',
      data: [18, 47, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
      borderWidth: 3,
    },
  ],
};

new Chart(ctx2, {
  type: 'doughnut',
  data: defectsData2,
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
            size: 9,
          },
        },
      },
      datalabels: {
        formatter: (value) => {
          return value + '%';
        },
        color: '#fff',
        font: {
          size: 8,
          weight: 'bold',
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});

const horizontalCtx = document
  .getElementById('horizontalBarChart')
  .getContext('2d');

function calculatePercentages(modules) {
  return modules.map((module) => {
    const { maxCases, completedCases } = module;
    if (maxCases === 0) return 0; // Избегаем деления на ноль
    return Math.round((completedCases / maxCases) * 100);
  });
}

// Пример данных
const modulesData = [
  { name: 'Module1', maxCases: 100, completedCases: 50 }, // 50%
  { name: 'Module2', maxCases: 200, completedCases: 140 }, // 70%
  { name: 'Module3', maxCases: 150, completedCases: 120 }, // 80%
  { name: 'Module4', maxCases: 80, completedCases: 40 }, // 50%
  { name: 'Module5', maxCases: 300, completedCases: 99 }, // 33%
  { name: 'Module6', maxCases: 120, completedCases: 90 }, // 75%
];

// Рассчитываем проценты
const percentages = calculatePercentages(modulesData);

const horizontalBarData = {
  labels: modulesData.map((module) => module.name), // Метки оси Y
  datasets: [
    {
      label: '',
      data: percentages, // Данные для горизонтальных столбцов
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(127, 118, 146, 0.7)',
      ],
      borderWidth: 1,
    },
  ],
};

new Chart(horizontalCtx, {
  type: 'bar', // Тип графика: столбчатый
  data: horizontalBarData,
  options: {
    indexAxis: 'y', // Инвертируем оси для горизонтального отображения
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Title',
      },
      datalabels: {
        display: true,
        color: '#fff',
        anchor: 'end', // Расположение подписи
        align: 'start', // Выравнивание
        formatter: (value) => `${value}%`, // Добавление процента
        font: {
          weight: 'bold',
        },
      },
    },

    // scales: {
    //   x: {
    //     beginAtZero: true, // Начало оси X с нуля
    //   },
    // },
  },
  plugins: [ChartDataLabels],
});

const customLegend = document.getElementById('customLegend');
modulesData.forEach((module, index) => {
  const legendItem = document.createElement('div');
  legendItem.style.display = 'flex';
  legendItem.style.alignItems = 'center';
  legendItem.style.marginBottom = '8px';

  // Круг цвета
  const colorBox = document.createElement('span');
  colorBox.style.display = 'inline-block';
  colorBox.style.width = '12px';
  colorBox.style.height = '12px';
  colorBox.style.marginRight = '8px';
  colorBox.style.backgroundColor =
    horizontalBarData.datasets[0].backgroundColor[index];

  // Текст с ссылкой
  const legendText = document.createElement('span');
  legendText.innerHTML = `${module.name} - <a href="${module.link}" style="text-decoration: underline; color: blue;">(${module.maxCases} cases)</a>`;
  legendText.style.fontSize = '14px';
  legendText.style.color = '#000';

  legendItem.appendChild(colorBox);
  legendItem.appendChild(legendText);
  customLegend.appendChild(legendItem);
});

document.getElementById('savePDF').addEventListener('click', () => {
  const element = document.getElementById('content'); // Контейнер для сохранения
  const options = {
    filename: 'example.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' },
  };

  html2pdf().set(options).from(element).save();
});
