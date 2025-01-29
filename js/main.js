import { createDoughnutChart } from './doughnutChart.js';
import { createVerticalBarChart } from './verticalChart.js';
import {
  defects1,
  defects2,
  colors1,
  colors2,
  defects3,
  colors3,
  defects4,
  colors4,
} from './chartData.js';
import { createHorizontalBarChart } from './horizontalBarChart.js';
import { savePDF } from './savePDF.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeCharts();
  setupPDFDownload();
});

function initializeCharts() {
  createDoughnutChart(
    'defectsBySeverity',
    'defectsBySeverityLegend',
    defects1,
    colors4
  );
  createDoughnutChart(
    'defectsBySmth',
    'defectsBySmthLegend',
    defects2,
    colors4
  );
  createVerticalBarChart(
    'verticalBarChart',
    'verticalBarLegend',
    defects3,
    colors3
  );

  // Генерация диаграммы и легенды
  createHorizontalBarChart(
    'horizontalBarChart',
    'horizontalBarLegend',
    defects4,
    colors4
  );
}

function setupPDFDownload() {
  document.getElementById('savePDF').addEventListener('click', savePDF); // Подключаем функцию для скачивания PDF
}
