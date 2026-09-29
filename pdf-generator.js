document.addEventListener('DOMContentLoaded', () => {
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');
    const downloadPngBtn = document.getElementById('downloadPngBtn');
    const certificate = document.getElementById('certificate');

    // Single-Page A4 PDF Export Lock
    downloadPdfBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        window.scrollTo(0, 0);

        html2canvas(certificate, {
            scale: 2,
            useCORS: true,
            logging: false
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
            pdf.save('Professional_Certificate.pdf');
        });
    });

    // High-Res PNG Export
    downloadPngBtn.addEventListener('click', () => {
        html2canvas(certificate, {
            scale: 2,
            useCORS: true,
            logging: false
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'Professional_Certificate.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
});