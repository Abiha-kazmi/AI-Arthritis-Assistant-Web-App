// ===== Speech Recognition =====
function startListening() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.onresult = function(event) {
    document.getElementById("speechText").innerText =
      event.results[0][0].transcript;
  };
  recognition.start();
}

// ===== Text to Speech =====
function speakText() {
  let text = document.getElementById("ttsText").value;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

// ===== Pain Tracker =====
let painData = [];
let painLabels = [];

const ctx = document.getElementById('painChart').getContext('2d');
const painChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: painLabels,
    datasets: [{
      label: 'Pain Level',
      data: painData,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: { y: { min: 0, max: 10 } }
  }
});

function addPain() {
  let pain = document.getElementById("painInput").value;
  if(pain !== "") {
    painData.push(pain);
    let now = new Date();
    painLabels.push(now.getHours() + ":" + now.getMinutes());
    painChart.update();
    document.getElementById("painInput").value = "";
  }
}

// ===== Exercise Video =====
function playExercise() {
  document.getElementById("exerciseVideo").play();
}
