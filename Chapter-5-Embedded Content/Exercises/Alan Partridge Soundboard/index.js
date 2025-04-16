// List of sample audio clips with metadata
const samples = [
    { name: "Ah-Ha", file: "ah-ha.mp3", duration: 1.4 },
    { name: "Dan", file: "dan.mp3", duration: 0.5 },
    { name: "Back of the net", file: "back-of-the-net.mp3", duration: 1.02 },
    { name: "Bang out of order", file: "bang-out-of-order.mp3", duration: 1.38 },
    { name: "Email of the evening", file: "emailoftheevening.mp3", duration: 1.49 },
    { name: "I ate a scotch egg", file: "iateascotchegg.mp3", duration: 1.91 },
    { name: "Im confused", file: "imconfused.mp3", duration: 1.49 },
    { name: "Kiss my face", file: "kiss-my-face.mp3", duration: 1.07 },
    { name: "Hello Partridge", file: "hellopartridge.mp3", duration: 2.25 },
    ];

    // Number of samples per page
const pageSize = 9;
// Track current page
let currentPage = 0;

// Get DOM elements
const grid = document.getElementById("sample-grid");
const prevBtn = document.getElementById("prev-page");
const nextBtn = document.getElementById("next-page");

// Function to display samples based on current page
function renderSamples() {
    grid.innerHTML = "";
    const start = currentPage * pageSize;
    const pageSamples = samples.slice(start, start + pageSize);

    pageSamples.forEach((sample, index) => {
        const btn = document.createElement("div");
        btn.className = "sample-button";

        // Create the serial number (index + start + 1 for the correct serial number on the page)
        const serialNumber = document.createElement("div");
        serialNumber.className = "serial-number";
        serialNumber.innerText = start + index + 10; // Adjusting for pagination

        // Sample Name and Duration
        const sampleName = document.createElement("div");
        sampleName.className = "sample-name";
        sampleName.innerHTML = `
            ${sample.name}
            <div class="sample-duration">${sample.duration}s</div>
        `;

         // Append the serial number first
        btn.appendChild(serialNumber);
        // Then append the sample name 
        btn.appendChild(sampleName);    
        btn.addEventListener("click", () => {
            const audio = new Audio(`Exercises/Audio Sampler/${sample.file}`);
            audio.play();
        });
        grid.appendChild(btn);
    });

    // Disable prev/next buttons based on current page
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = start + pageSize >= samples.length;
}
    // Handle previous button click
    prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderSamples();
    }
});
// Handle next button click
nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * pageSize < samples.length) {
        currentPage++;
        renderSamples();
    }
});
// Handle Text-to-Speech button click
document.getElementById("say-it").addEventListener("click", () => {
    const text = document.getElementById("tts-text").value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});
// Initialize the first set of samples
renderSamples();

  
  

  
   
  
   
  
  
  
  
  
  