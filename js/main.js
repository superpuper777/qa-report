import { createDoughnutChart } from './doughnutСhart.js';
import { defects1, defects2, colors1, colors2 } from './chartData.js';

document.addEventListener('DOMContentLoaded', () => {
  createDoughnutChart(
    'defectsBySeverity',
    'defectsBySeverityLegend',
    defects1,
    colors1
  );
  createDoughnutChart(
    'defectsBySmth',
    'defectsBySmthLegend',
    defects2,
    colors2
  );
});
