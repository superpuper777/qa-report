/**
 * Функция для расчёта процентов по количеству задач
 * @param {Object} taskCounts - объект с категориями и их количеством задач
 * @param {number} totalTasks - общее количество задач
 * @returns {Array} массив процентов
 */
function calculatePercentages(taskCounts, totalTasks) {
  return Object.values(taskCounts).map((count) =>
    ((count / totalTasks) * 100).toFixed(2)
  );
}

/**
 * Функция для создания круговой диаграммы дефектов
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

    // Цветной круг
    const colorCircle = document.createElement('span');
    colorCircle.style.display = 'inline-block';
    colorCircle.style.width = '12px';
    colorCircle.style.height = '12px';
    colorCircle.style.marginRight = '8px';
    colorCircle.style.backgroundColor = colors[index];
    colorCircle.style.borderRadius = '50%';

    // Текст с ссылкой
    const legendText = document.createElement('span');
    legendText.innerHTML = `${name} - <a href="${link}" style="text-decoration: underline; color: blue;">(${count} cases)</a>`;
    legendText.style.fontSize = '14px';
    legendText.style.color = '#000';

    legendItem.appendChild(colorCircle);
    legendItem.appendChild(legendText);
    legendContainer.appendChild(legendItem);
  });
}

function createDoughnutChart(chartId, legendId, taskCounts, colors) {
  const ctx = document.getElementById(chartId).getContext('2d');
  const labels = Object.keys(taskCounts);
  const data = labels.map((label) => taskCounts[label].count);

  // Считаем общий суммарный count
  const totalCount = Object.values(taskCounts).reduce(
    (acc, { count }) => acc + count,
    0
  );

  // Считаем проценты для данных
  const percentageData = data.map((count) =>
    ((count / totalCount) * 100).toFixed()
  );

  // Сначала создаем легенду
  createCustomLegend(legendId, taskCounts, colors);

  // Затем создаем сам график
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  const doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: {
      responsive: false,
      plugins: {
        legend: { display: false }, // Отключаем встроенную легенду
        datalabels: {
          formatter: (value, context) => {
            // Получаем индекс текущего сегмента
            const index = context.dataIndex;
            // Форматируем отображаемые данные: число и процент
            return `${percentageData[index]}%`;
          },
          color: '#fff',
          font: { size: 8, weight: 'bold' },
        },
      },
    },
    plugins: [ChartDataLabels], // Подключаем плагин для отображения данных
  });
}

export { createDoughnutChart };
