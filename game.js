// ===== All 20 questions =====
const questions = [ /* ... all 20 questions same as before ... */ ];

// Display questions dynamically
const qDiv = document.getElementById("questions");
questions.forEach((block,i)=>{
  let html = `<h3>${block.cat}</h3>`;
  block.q.forEach((opt,j)=>{
    html += `<div class="option-btn" data-cat='${i}' data-value='${opt.v}' data-msg='${opt.msg}' onclick='updatePet(this)'>${opt.t}</div>`;
  });
  qDiv.innerHTML += html;
});

let currentTemp = 25;

function updatePet(btn){
  const cat = btn.dataset.cat;
  const value = parseInt(btn.dataset.value);

  // Highlight selected option
  document.querySelectorAll(`.option-btn[data-cat='${cat}']`).forEach(b=>b.classList.remove("selected"));
  btn.classList.add("selected");

  // Calculate total points
  let totalPoints = 0;
  questions.forEach((block,i)=>{
    const selected = document.querySelector(`.option-btn[data-cat='${i}'].selected`);
    if(selected){ totalPoints += parseInt(selected.dataset.value); }
  });

  // Update pet emoji
  const pet = document.getElementById("pet");
  if(totalPoints < 15){ 
    pet.textContent="😺"; 
    pet.style.filter="drop-shadow(0 0 10px green)"; 
  } else if(totalPoints < 40){ 
    pet.textContent="😼"; 
    pet.style.filter="drop-shadow(0 0 15px yellow)"; 
  } else if(totalPoints < 70){ 
    pet.textContent="👽"; 
    pet.style.filter="drop-shadow(0 0 20px purple)"; 
  } else { 
    pet.textContent="👹"; 
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
  let currentTemp = 25 + totalPoints;
  let heightPercent = Math.min((currentTemp-25)*2,100);
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

function endDay(){
  let totalPoints = 0;
  questions.forEach((block,i)=>{
    const selected = document.querySelector(`.option-btn[data-cat='${i}'].selected`);
    if(selected){ totalPoints += parseInt(selected.dataset.value); }
  });

  let msg="";
  if(totalPoints<15) msg="Your pet stayed cute 🌿!";
  else if(totalPoints<40) msg="Your pet is growing suspicious 👽!";
  else if(totalPoints<70) msg="Your pet turned into an alien 👽!";
  else msg="Your monster exploded! 👹🔥";

  alert(`Day ended! Total CO₂ points: ${totalPoints}\n${msg}`);
  location.reload();
}
