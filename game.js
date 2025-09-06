const questions = [
  { q: "How do you usually commute?", opts: ["Car", "Bike", "Public Transport", "Walking"] },
  { q: "How often do you recycle?", opts: ["Always", "Sometimes", "Rarely", "Never"] },
  { q: "What food do you eat most?", opts: ["Meat", "Vegetarian", "Vegan", "Mixed"] },
  { q: "How often do you shop for clothes?", opts: ["Weekly", "Monthly", "Rarely"] },
  { q: "Do you use energy-saving appliances?", opts: ["Yes", "No"] },
  { q: "Do you leave lights on when not needed?", opts: ["Yes", "No"] },
  { q: "How do you cool/heat your home?", opts: ["AC", "Fan", "Heater", "Natural Ventilation"] },
  { q: "Do you compost kitchen waste?", opts: ["Yes", "No"] },
  { q: "How often do you order food delivery?", opts: ["Daily", "Weekly", "Rarely"] },
  { q: "Do you carry reusable bags?", opts: ["Yes", "No"] },
  { q: "Do you use plastic bottles?", opts: ["Yes", "No"] },
  { q: "How long are your showers?", opts: ["<5 min", "10 min", "20+ min"] },
  { q: "Do you use renewable energy?", opts: ["Yes", "No"] },
  { q: "Do you donate old clothes?", opts: ["Yes", "No"] },
  { q: "Do you print documents often?", opts: ["Yes", "No"] },
  { q: "How often do you travel by air?", opts: ["Often", "Sometimes", "Rarely", "Never"] },
  { q: "Do you eat local food?", opts: ["Yes", "No"] },
  { q: "Do you unplug devices not in use?", opts: ["Yes", "No"] },
  { q: "Do you prefer second-hand items?", opts: ["Yes", "No"] },
  { q: "Do you separate dry and wet waste?", opts: ["Yes", "No"] }
];

const container = document.getElementById("questions-container");
const tempDisplay = document.getElementById("temperature");

let temperature = 20;

// Render questions
questions.forEach((item, i) => {
  const block = document.createElement("div");
  block.className = "question-block";

  const qEl = document.createElement("div");
  qEl.className = "question";
  qEl.textContent = (i + 1) + ". " + item.q;

  const optsDiv = document.createElement("div");
  optsDiv.className = "options";

  item.opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => {
      temperature += 1;
      tempDisplay.textContent = temperature + "°C";
    };
    optsDiv.appendChild(btn);
  });

  block.appendChild(qEl);
  block.appendChild(optsDiv);
  container.appendChild(block);
});
