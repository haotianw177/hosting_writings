// CONFIGURATION: Add your files here
// 'label' is what appears on the button
// 'file' is the path to your PDF inside the 'pdfs' folder
const documents = [
    { label: "White Wine Quality Prediciton", link: "pdfs/wine_quality_prediction.pdf" },
    { label: "Hackers in the Bazzar", link: "https://haotianw177.github.io/hackers-in-the-bazzar-blogs-notre-dame-fa24/" },
    { label: "Secure Communication Via Cryptographic Systems", link: "pdfs/comp_security.pdf" }
];

const listContainer = document.getElementById('button-list');

// Loop through the data and create buttons
documents.forEach(doc => {
    const btn = document.createElement('button');
    btn.innerText = doc.label;
    
    // Event listener to open PDF in a new window/tab
    btn.addEventListener('click', () => {
        // '_blank' forces the browser to open a new tab/window, works for both lcoal path file and url link
        window.open(doc.link, '_blank');
    });

    listContainer.appendChild(btn);
});