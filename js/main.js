import { createDoughnutChart } from './doughnutChart.js';
import { createVerticalBarChart } from './verticalChart.js';

import {
  defects1,
  defects2,
  colors1,
  colors2,
  defects3,
  colors3,
} from './chartData.js';

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
  createVerticalBarChart(
    'verticalBarChart',
    'verticalBarLegend',
    defects3,
    colors3
  );
});
