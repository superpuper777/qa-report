/**
 * Функция для создания вертикального столбчатого графика
 * @param {string} canvasId - ID элемента canvas
 * @param {string} legendId - ID контейнера для легенды
 * @param {Object} taskCounts - объект с категориями и их количеством задач
 * @param {Array} colors - массив цветов для графика
 */

function createCustomLegend(legendId, taskCounts, colors) {
  const legendContainer = document.getElementById(legendId);
  if (!legendContainer) return;

  legendContainer.innerHTML = ''; // Очищаем перед добавлением новой легенды

  Object.entries(taskCounts).forEach(([name, { count, link }], index) => {
    const legendItem = document.createElement('div');
    legendItem.style.display = 'flex';
    legendItem.style.alignItems = 'center';
    legendItem.style.marginBottom = '8px';

    // Цветной квадрат
    const colorBox = document.createElement('span');
    colorBox.style.display = 'inline-block';
    colorBox.style.width = '12px';
    colorBox.style.height = '12px';
    colorBox.style.marginRight = '8px';
    colorBox.style.backgroundColor = colors[index];

    // Текст с ссылкой
    const legendText = document.createElement('span');
    legendText.innerHTML = `${name} - <a href="${link}" style="text-decoration: underline; color: blue;">(${count} cases)</a>`;
    legendText.style.fontSize = '14px';
    legendText.style.color = '#000';

    legendItem.appendChild(colorBox);
    legendItem.appendChild(legendText);
    legendContainer.appendChild(legendItem);
  });
}

function createVerticalBarChart(canvasId, legendId, taskCounts, colors) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const labels = Object.keys(taskCounts);
  const data = labels.map((label) => taskCounts[label].count);

  // Сначала создаем кастомную легенду
  createCustomLegend(legendId, taskCounts, colors);

  // Считаем максимальное значение для оси Y, чтобы задать границы
  const maxValue = 220;

  // Создаем сам график
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: false,
      plugins: {
        legend: { display: false }, // Отключаем встроенную легенду
      },
      scales: {
        y: {
          beginAtZero: true,
          // max: maxValue, // Максимальное значение для оси Y
          ticks: {
            // count: 6, // 6 делений
            // stepSize: Math.ceil(maxValue / 5), // Разделяем ось Y на 5 частей (можно настроить)
          },
        },
      },
    },
  });
}

export { createVerticalBarChart };
