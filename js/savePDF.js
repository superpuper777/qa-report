export function savePDF() {
  const element = document.getElementById('content'); // Контейнер для сохранения
  const options = {
    filename: 'example.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' },
  };

  html2pdf().set(options).from(element).save();
}
