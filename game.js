// ...questions array as before

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
  if(totalPoints < 15){ pet.textContent="😺"; pet.style.filter="drop-shadow(0 0 10px green)"; }
  else if(totalPoints < 40){ pet.textContent="😼"; pet.style.filter="drop-shadow(0 0 15px yellow)"; }
  else if(totalPoints < 70){ pet.textContent="👽"; pet.style.filter="drop-shadow(0 0 20px purple)"; }
  else { pet.textContent="👹"; pet.style.filter="drop-shadow(0 0 25px red)"; }

  pet.style.transform = "scale(1.3)";
  setTimeout(()=>{ pet.style.transform = "scale(1)"; }, 300);

  // Update thermometer
  currentTemp = 25 + totalPoints;
  const thermo = document.getElementById("thermoMercury");
  const thermoNum = document.getElementById("thermoNumber");
  let heightPercent = Math.min((currentTemp-25)*2,100);
  thermo.style.height = heightPercent+"%";
  if(heightPercent < 40){ thermo.style.background="linear-gradient(to top, green, lime)"; }
  else if(heightPercent < 70){ thermo.style.background="linear-gradient(to top, yellow, orange)"; }
  else { thermo.style.background="linear-gradient(to top, red, darkred)"; }
  thermoNum.textContent = currentTemp+"°C";

  // ===== Speech bubble =====
  const bubble = document.getElementById("speechBubble");
  bubble.textContent = btn.dataset.msg;
  bubble.style.opacity = 1;

  // Reposition bubble to avoid collision
  const rect = btn.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const petContainer = document.getElementById("petContainer");

  if(window.innerWidth <= 768){
    bubble.style.position = 'absolute';
    bubble.style.left = (rect.left) + 'px';
    bubble.style.top = (rect.top + scrollTop - bubble.offsetHeight - 10) + 'px';
    petContainer.style.top = (scrollTop + 20) + 'px'; // float near top-right while scrolling
  } else {
    bubble.style.position = 'relative';
    bubble.style.left = 'auto';
    bubble.style.top = 'auto';
    petContainer.style.top = '80px';
  }

  setTimeout(()=>{ bubble.style.opacity=0; }, 3000);
}

// End day button
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
