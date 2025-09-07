// ===== All 20 questions =====
const questions = [
  {cat:"🍲 Food", q:[{t:"Vegetarian thali",v:0,msg:"Veg is green 🌿!"},{t:"Chicken biryani",v:5,msg:"Chicken adds CO₂ 🌫️"},{t:"Mutton curry",v:8,msg:"Mutton has high emissions 🐄"}]},
  {cat:"🚗 Travel", q:[{t:"Walk / Cycle",v:0,msg:"Walking saves CO₂ 🚶‍♂️"},{t:"Bus / Metro",v:3,msg:"Public transport 🚇"},{t:"Auto / Car",v:7,msg:"Cars burn fuel 🌫️"}]},
  {cat:"📱 Digital", q:[{t:"Light phone use",v:0,msg:"Low energy 👍"},{t:"1 hr streaming",v:2,msg:"Streaming uses energy 📶"},{t:"3+ hrs binge",v:5,msg:"Heavy streaming 💻"}]},
  {cat:"💡 Energy", q:[{t:"Switch off fans/lights",v:0,msg:"Energy saved 🌿"},{t:"Forget to turn off",v:4,msg:"Unused energy burns 💡"},{t:"AC 6+ hrs",v:8,msg:"AC emits CO₂ ❄️"}]},
  {cat:"🚿 Water", q:[{t:"Bucket bath",v:0,msg:"Saves energy & water 💧"},{t:"5 min shower",v:3,msg:"Short shower ok 🌤️"},{t:"15 min shower",v:7,msg:"Long shower = more CO₂"}]},
  {cat:"🛍️ Shopping", q:[{t:"Cloth bag",v:0,msg:"No plastic!"},{t:"Plastic bag",v:3,msg:"Plastic adds waste 🌫️"},{t:"Fast fashion buy",v:6,msg:"Fast fashion = high carbon 👕"}]},
  {cat:"♻️ Waste", q:[{t:"Segregate waste",v:0,msg:"Recycling saves ♻️"},{t:"Throw mixed",v:4,msg:"Mixed waste ↑ CO₂"},{t:"Litter outside",v:6,msg:"Harmful to environment!"}]},
  {cat:"☕ Drinks", q:[{t:"Steel tumbler",v:0,msg:"No plastic! 👍"},{t:"Plastic cup",v:2,msg:"Plastic = bad 🌫️"},{t:"Bottled drink",v:4,msg:"Bottled drinks add CO₂ 🥤"}]},
  {cat:"📦 Delivery", q:[{t:"No order today",v:0,msg:"No extra CO₂"},{t:"Food delivery",v:3,msg:"Delivery adds emissions 🍱"},{t:"Multiple parcels",v:6,msg:"More parcels = more CO₂"}]},
    {cat:"🎧 Music", q:[{t:"Radio/offline",v:0,msg:"Offline green 🎵"},{t:"Streaming few songs",v:1,msg:"Some streaming ok 🎶"},{t:"Streaming 5+ hrs",v:3,msg:"Heavy streaming burns 💻"}]},
  {cat:"🥤 Beverage", q:[{t:"Home-made tea",v:0,msg:"Zero waste ☕"},{t:"Café takeaway",v:2,msg:"Some waste 🌫️"},{t:"Café daily",v:4,msg:"Daily cups ↑ carbon 🥤"}]},
  {cat:"🚮 Food waste", q:[{t:"Finish meal",v:0,msg:"No waste 👍"},{t:"Some leftovers",v:3,msg:"Waste resources 🍲"},{t:"Waste a lot",v:6,msg:"Food waste ↑ CO₂ 💥"}]},
  {cat:"📴 Gadgets", q:[{t:"Switch off charger",v:0,msg:"Smart! Saves 🔌"},{t:"Leave plugged",v:2,msg:"Wasted energy 💡"},{t:"Multiple gadgets",v:4,msg:"High energy ⚡"}]},
  {cat:"👕 Clothes care", q:[{t:"Sun-dry clothes",v:0,msg:"Energy free 🌞"},{t:"Use washing machine",v:3,msg:"Some energy ⚡"},{t:"Dryer machine",v:6,msg:"High appliance use"}]},
  {cat:"🏠 Cooling", q:[{t:"Open windows",v:0,msg:"Natural ventilation 🌬️"},{t:"Fan",v:2,msg:"Some energy 💨"},{t:"AC full night",v:8,msg:"Consumes lots ❄️"}]},
  {cat:"🚰 Drinking water", q:[{t:"Steel bottle refill",v:0,msg:"No plastic!"},{t:"Plastic bottle",v:2,msg:"Plastic adds CO₂ 🌫️"},{t:"2+ plastic bottles",v:5,msg:"High footprint 🥤"}]},
  {cat:"🌙 Sleep", q:[{t:"Early sleep, lights off",v:0,msg:"Energy saver 🌿"},{t:"Sleep with lights on",v:2,msg:"Lights use energy 💡"},{t:"All night lights+fan",v:5,msg:"High night energy 🌙"}]},
  {cat:"🍽️ Eating out", q:[{t:"Home-cooked meal",v:0,msg:"Best choice 🌿"},{t:"Restaurant vegetarian",v:3,msg:"Some footprint 🍲"},{t:"Restaurant non-veg",v:7,msg:"High carbon 🐄"}]}
];

// Display questions dynamically
const qDiv = document.getElementById("questions");
questions.forEach((block,i)=>{
  let html = `<h3>${block.cat}</h3>`;
  block.q.forEach((opt,j)=>{
    html += `<div class="option-btn" data-cat='${i}' data-value='${opt.v}' data-msg='${opt.msg}' onclick='updatePet(this)'>${opt.t}</div>`;
  });
  qDiv.innerHTML += html;
});

let currentTemp = 20;

function updatePet(btn){
  const cat = btn.dataset.cat;
  const value = parseInt(btn.dataset.value);

  // Highlight selected option
  document.querySelectorAll(`.option-btn[data-cat='${cat}']`).forEach(b=>b.classList.remove("selected"));
  btn.classList.add("selected");

  // Calculate total points
  let totalPoints = 0;
let maxPoints = 0; // new: highest possible points
questions.forEach((block,i)=>{
  maxPoints += Math.max(...block.q.map(opt => opt.v)); // max per category
  const selected = document.querySelector(`.option-btn[data-cat='${i}'].selected`);
  if(selected){ totalPoints += parseInt(selected.dataset.value); }
});
  // Update pet emoji based on totalPoints
  const pet = document.getElementById("pet");
  if(totalPoints <= 25){ 
    pet.textContent = "🌿";          // starting leaf
    pet.style.filter="drop-shadow(0 0 10px green)";
  }
  else if(totalPoints < 30){ 
    pet.textContent="😺";           // happy cat
    pet.style.filter="drop-shadow(0 0 10px green)";
  }
  else if(totalPoints < 40){ 
    pet.textContent="😼";           // mischievous cat
    pet.style.filter="drop-shadow(0 0 15px yellow)";
  }
  else if(totalPoints < 45){ 
    pet.textContent="👽";           // alien / scary
    pet.style.filter="drop-shadow(0 0 20px purple)";
  }
  else { 
    pet.textContent="👹";           // monster / angry
    pet.style.filter="drop-shadow(0 0 25px red)";
  }

  // Pet pop effect only for desktop
  if(window.innerWidth > 768){
    pet.style.transform = "scale(1.3)";
    setTimeout(()=>{ pet.style.transform = "scale(1)"; }, 300);
  }

  // Update thermometer
  const thermo = document.getElementById("thermoMercury");
  const thermoNum = document.getElementById("thermoNumber");
  let scaledTemp = 20 + ((totalPoints / maxPoints) * 50); // 20 + 0-50 → 20-70
  currentTemp = Math.round(scaledTemp);
  let heightPercent = Math.min(((currentTemp - 20) / 50) * 100, 100);
  thermo.style.height = heightPercent+"%";
  if(heightPercent < 40){ thermo.style.background="linear-gradient(to top, green, lime)"; }
  else if(heightPercent < 70){ thermo.style.background="linear-gradient(to top, yellow, orange)"; }
  else { thermo.style.background="linear-gradient(to top, red, darkred)"; }
  thermoNum.textContent = currentTemp+"°C";

  // Show speech bubble above the pet
  const bubble = document.getElementById("speechBubble");
  bubble.textContent = btn.dataset.msg;
  bubble.style.opacity = 1;
  bubble.style.top = "-40px"; // always above the pet
  bubble.style.left = "50%";
  bubble.style.transform = "translateX(-50%)";

  // Hide bubble after 3s
  clearTimeout(bubble.hideTimeout);
  bubble.hideTimeout = setTimeout(()=>{ bubble.style.opacity=0; }, 3000);
}

function endDay() {
  let totalPoints = 0;
  questions.forEach((block, i) => {
    const selected = document.querySelector(`.option-btn[data-cat='${i}'].selected`);
    if (selected) { totalPoints += parseInt(selected.dataset.value); }
  });

  // Cap points max at 70 for sensible display
  totalPoints = Math.min(totalPoints, 70);

  // Determine verdict based on points
  let verdict = "";
  if (totalPoints <= 20) verdict = "Your pet stayed cute 🌿!";
  else if (totalPoints <= 35) verdict = "Your pet is suspicious 😼!";
  else if (totalPoints <= 50) verdict = "Your pet is turning strange 👽!";
  else verdict = "Your monster exploded! 👹🔥";

  // Create futuristic green glow end-day box
  let endBox = document.getElementById("endDayBox");
  if (!endBox) {
    endBox = document.createElement("div");
    endBox.id = "endDayBox";
    endBox.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 20, 0, 0.7);
      border: 2px solid #0f0;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      color: #0f0;
      font-family: 'Orbitron', sans-serif;
      font-size: 16px;
      box-shadow: 0 0 15px #0f0, 0 0 30px #0f0 inset;
      z-index: 9999;
    `;
    document.body.appendChild(endBox);
  }

  endBox.innerHTML = `<strong>Day ended!</strong><br>Total CO₂ points: ${totalPoints}<br>${verdict}<br><br>
                      <button onclick="location.reload()" 
                              style="padding:10px 20px; font-family:'Orbitron',sans-serif; font-weight:bold;
                                     background: rgba(0,50,0,0.6); color:#0f0; border:2px solid #0f0; border-radius:8px;
                                     cursor:pointer; box-shadow:0 0 10px #0f0;">Restart</button>`;
}
}




