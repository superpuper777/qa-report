// Функция для расчета процентов
export function calculatePercentages(modules, defaultMaxCases) {
  return modules.map((module) => {
    const { completedCases, maxCases } = module; // Используем maxCases, если оно задано, иначе берем defaultMaxCases
    const totalMaxCases = maxCases ?? defaultMaxCases; // Проверка: если maxCases отсутствует, берём defaultMaxCases
    if (totalMaxCases === 0) return 0; // Избегаем деления на ноль
    return Math.round((completedCases / totalMaxCases) * 100);
  });
}
