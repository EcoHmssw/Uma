const questions = [
  {
    q: "How can you save electricity at home?",
    options: [
      { text: "Turn off lights when not needed 💡", v: 1 },
      { text: "Keep everything on all day 🔥", v: 3 }
    ]
  },
  {
    q: "Best way to travel short distances?",
    options: [
      { text: "Walk or cycle 🚴", v: 1 },
      { text: "Take the car 🚗", v: 3 }
    ]
  },
  {
    q: "How should you use air conditioning?",
    options: [
      { text: "Use a fan or set AC at 26°C ❄️", v: 1 },
      { text: "Blast AC at 18°C all day 🥶", v: 3 }
    ]
  },
  {
    q: "What should you do with old clothes?",
    options: [
      { text: "Donate or recycle 👕", v: 1 },
      { text: "Throw them away 🗑️", v: 3 }
    ]
  },
  {
    q: "Best way to shop groceries?",
    options: [
      { text: "Carry a cloth bag 🛍️", v: 1 },
      { text: "Use plastic bags each time 🛒", v: 3 }
    ]
  },
  {
    q: "What about food waste?",
    options: [
      { text: "Compost leftovers 🌱", v: 1 },
      { text: "Throw everything in trash 🗑️", v: 3 }
    ]
  },
  {
    q: "Which type of transport is greener?",
    options: [
      { text: "Bus / Train 🚆", v: 1 },
      { text: "Personal car alone 🚙", v: 3 }
    ]
  },
  {
    q: "How should you use electronic gadgets?",
    options: [
      { text: "Unplug chargers 🔌", v: 1 },
      { text: "Leave them plugged in ⚡", v: 3 }
    ]
  },
  {
    q: "What should you do with old phones?",
    options: [
      { text: "Recycle e-waste ♻️", v: 1 },
      { text: "Throw in dustbin 🚮", v: 3 }
    ]
  },
  {
    q: "Best way to wash clothes?",
    options: [
      { text: "Use cold water / eco-mode 🧺", v: 1 },
      { text: "Hot water daily 🔥", v: 3 }
    ]
  },
  {
    q: "Best way to cook?",
    options: [
      { text: "Use pressure cooker 🍲", v: 1 },
      { text: "Keep stove burning long 🔥", v: 3 }
    ]
  },
  {
    q: "Which energy should be preferred?",
    options: [
      { text: "Solar / Renewable ☀️", v: 1 },
      { text: "Coal / Diesel ⛽", v: 3 }
    ]
  },
  {
    q: "What to do with paper?",
    options: [
      { text: "Use both sides 📄", v: 1 },
      { text: "Use once and throw ❌", v: 3 }
    ]
  },
  {
    q: "How can you save fuel?",
    options: [
      { text: "Carpool / Public transport 🚍", v: 1 },
      { text: "Drive alone every day 🚘", v: 3 }
    ]
  },
  {
    q: "What about planting?",
    options: [
      { text: "Plant trees 🌳", v: 1 },
      { text: "Cut trees carelessly 🪓", v: 3 }
    ]
  },
  {
    q: "How should you manage plastic bottles?",
    options: [
      { text: "Refill / Reuse ♻️", v: 1 },
      { text: "Buy new every time 🍼", v: 3 }
    ]
  },
  {
    q: "Best way to keep your house cool?",
    options: [
      { text: "Open windows for air 🌬️", v: 1 },
      { text: "Run AC all day ❄️", v: 3 }
    ]
  }
];

const questionsContainer = document.getElementById("questionsContainer");
const thermoFill = document.getElementById("thermo-fill");
const temperature = document.getElementById("temperature");

let temp = 20;

function renderQuestions() {
  questions.forEach((item) => {
    const qBox = document.createElement("div");
    qBox.classList.add("q-box");

    const qText = document.createElement("p");
    qText.textContent = item.q;
    qBox.appendChild(qText);

    const opts = document.createElement("div");
    opts.classList.add("options");

    item.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = opt.text;
      btn.onclick = () => {
        temp += opt.v;
        if (temp < 15) temp = 15;
        if (temp > 50) temp = 50;
        temperature.textContent = temp + "°C";

        let percent = ((temp - 15) / 35) * 100;
        thermoFill.style.height = percent + "%";
        thermoFill.style.background = 
          temp > 35 ? "red" : temp > 25 ? "orange" : "limegreen";
      };
      opts.appendChild(btn);
    });

    qBox.appendChild(opts);
    questionsContainer.appendChild(qBox);
  });
}

renderQuestions();
