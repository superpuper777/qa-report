export function savePDF() {
  const element = document.getElementById('content'); // Контейнер для сохранения
  const options = {
    filename: 'example.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: {
      unit: 'mm',
      format: [210, 1000], // 210mm (A4 width), 10000mm height (очень длинный)
      orientation: 'portrait',
    },
  };

  html2pdf().set(options).from(element).save();
}
