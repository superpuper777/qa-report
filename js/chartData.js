// Данные для графиков
export const defects1 = {
  Critical: { count: 5, link: '/critical-defects' },
  Major: { count: 25, link: '/major-defects' },
  Average: { count: 50, link: '/average-defects' },
  Minor: { count: 30, link: '/minor-defects' },
};
export const defects2 = {
  Low: { count: 10, link: '/low' },
  Medium: { count: 20, link: '/meduim' },
  High: { count: 40, link: '/high' },
  VeryHigh: { count: 30, link: '/very-high' },
};

export const colors1 = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'];
export const colors2 = ['#ff9f40', '#ffcd56', '#4bc0c0', '#9966ff'];

export const defects3 = {
  'Category A': { count: 80, link: '#linkA' },
  'Category B': { count: 120, link: '#linkB' },
  'Category C': { count: 50, link: '#linkC' },
  'Category D': { count: 20, link: '#linkD' },
  'Category E': { count: 10, link: '#linkE' },
};

export const colors3 = ['#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB'];

// Пример использования
export const defects4 = [
  { name: 'Module1', maxCases: 100, completedCases: 50, link: '#module1' }, // 50%
  { name: 'Module2', maxCases: 200, completedCases: 140, link: '#module2' }, // 70%
  { name: 'Module3', maxCases: 150, completedCases: 120, link: '#module3' }, // 80%
  { name: 'Module4', maxCases: 80, completedCases: 40, link: '#module4' }, // 50%
  { name: 'Module5', maxCases: 300, completedCases: 99, link: '#module5' }, // 33%
  { name: 'Module6', maxCases: 120, completedCases: 90, link: '#module6' }, // 75%
];

export const colors4 = [
  'rgba(255, 99, 132, 0.7)',
  'rgba(54, 162, 235, 0.7)',
  'rgba(255, 206, 86, 0.7)',
  'rgba(75, 192, 192, 0.7)',
  'rgba(153, 102, 255, 0.7)',
  'rgba(127, 118, 146, 0.7)',
  'rgba(146, 119, 118, 0.7)',
];
