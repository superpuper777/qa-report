/**
 * Функция для создания кастомной легенды для диаграммы
 * @param {string} legendId - ID контейнера для легенды
 * @param {Array} modules - массив объектов с данными по модулям
 * @param {Array} backgroundColors - массив цветов для диаграммы
 */
function createHorizontalBarLegend(legendId, modules, backgroundColors) {
  const customLegend = document.getElementById(legendId);
  if (!customLegend) return;

  modules.forEach((module, index) => {
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
    colorBox.style.backgroundColor = backgroundColors[index];

    // Текст с ссылкой
    const legendText = document.createElement('span');
    legendText.innerHTML = `${module.name} - <a href="${module.link}" style="text-decoration: underline; color: blue;">(${module.maxCases} cases)</a>`;
    legendText.style.fontSize = '14px';
    legendText.style.color = '#000';

    legendItem.appendChild(colorBox);
    legendItem.appendChild(legendText);
    customLegend.appendChild(legendItem);
  });
}

/**
 * Функция для создания горизонтального столбчатого графика с кастомной легендой
 * @param {string} chartId - ID элемента canvas для диаграммы
 * @param {string} legendId - ID контейнера для легенды
 * @param {Array} modules - массив объектов с данными по модулям
 * @param {Array} colors - массив цветов для графика
 */
function createHorizontalBarChart(chartId, legendId, modules, colors) {
  const horizontalCtx = document.getElementById(chartId).getContext('2d');

  // Рассчитываем проценты для каждого модуля
  const percentages = modules.map((module) => {
    const { maxCases, completedCases } = module;
    if (maxCases === 0) return 0; // Избегаем деления на ноль
    return Math.round((completedCases / maxCases) * 100);
  });

  // Сначала создаем кастомную легенду
  createHorizontalBarLegend(legendId, modules, colors);

  const horizontalBarData = {
    labels: modules.map((module) => module.name), // Метки оси Y
    datasets: [
      {
        label: '',
        data: percentages, // Данные для горизонтальных столбцов
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  new Chart(horizontalCtx, {
    type: 'bar', // Тип графика: столбчатый
    data: horizontalBarData,
    options: {
      indexAxis: 'y', // Инвертируем оси для горизонтального отображения
      responsive: false,
      plugins: {
        legend: {
          display: false, // Отключаем встроенную легенду
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
    },
    plugins: [ChartDataLabels], // Подключаем плагин для отображения данных
  });
}

export { createHorizontalBarChart };
