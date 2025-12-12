// CONFIGURATION: Add your files here
// 'label' is what appears on the button
// 'file' is the path to your PDF inside the 'pdfs' folder
const documents = [
    { label: "White Wine Quality Prediciton", file: "pdfs/wine_quality_prediction.pdf" },
    { label: "View Resume",        file: "pdfs/resume.pdf" },
    { label: "Read Report",        file: "pdfs/report.pdf" }
];

const listContainer = document.getElementById('button-list');

// Loop through the data and create buttons
documents.forEach(doc => {
    const btn = document.createElement('button');
    btn.innerText = doc.label;
    
    // Event listener to open PDF in a new window/tab
    btn.addEventListener('click', () => {
        // '_blank' forces the browser to open a new tab/window
        window.open(doc.file, '_blank');
    });

    listContainer.appendChild(btn);
});