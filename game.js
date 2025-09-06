console.log("Updated game.js loaded!");
const questions = [
  {cat:"🍲 Food",q:[{t:"Vegetarian thali",v:0,msg:"Veg is green 🌿!"},{t:"Chicken biryani",v:5,msg:"Chicken adds CO₂ 🌫️"},{t:"Mutton curry",v:8,msg:"Mutton has high emissions 🐄"}]},
  {cat:"🚗 Travel",q:[{t:"Walk / Cycle",v:0,msg:"Walking saves CO₂ 🚶‍♂️"},{t:"Bus / Metro",v:3,msg:"Public transport 🚇"},{t:"Auto / Car",v:7,msg:"Cars burn fuel 🌫️"}]},
  {cat:"📱 Digital",q:[{t:"Light phone use",v:0,msg:"Low energy 👍"},{t:"1 hr streaming",v:2,msg:"Streaming uses energy 📶"},{t:"3+ hrs binge",v:5,msg:"Heavy streaming 💻"}]},
  {cat:"💡 Energy",q:[{t:"Switch off fans/lights",v:0,msg:"Energy saved 🌿"},{t:"Forget to turn off",v:4,msg:"Unused energy burns 💡"},{t:"AC 6+ hrs",v:8,msg:"AC emits CO₂ ❄️"}]},
  {cat:"🚿 Water",q:[{t:"Bucket bath",v:0,msg:"Saves energy & water 💧"},{t:"5 min shower",v:3,msg:"Short shower ok 🌤️"},{t:"15 min shower",v:7,msg:"Long shower = more CO₂"}]},
  {cat:"🛍️ Shopping",q:[{t:"Cloth bag",v:0,msg:"No plastic!"},{t:"Plastic bag",v:3,msg:"Plastic adds waste 🌫️"},{t:"Fast fashion buy",v:6,msg:"Fast fashion = high carbon 👕"}]},
  {cat:"♻️ Waste",q:[{t:"Segregate waste",v:0,msg:"Recycling saves ♻️"},{t:"Throw mixed",v:4,msg:"Mixed waste ↑ CO₂"},{t:"Litter outside",v:6,msg:"Harmful to environment!"}]},
  {cat:"☕ Drinks",q:[{t:"Steel tumbler",v:0,msg:"No plastic! 👍"},{t:"Plastic cup",v:2,msg:"Plastic = bad 🌫️"},{t:"Bottled drink",v:4,msg:"Bottled drinks add CO₂ 🥤"}]},
  {cat:"📦 Delivery",q:[{t:"No order today",v:0,msg:"No extra CO₂"},{t:"Food delivery",v:3,msg:"Delivery adds emissions 🍱"},{t:"Multiple parcels",v:6,msg:"More parcels = more CO₂"}]},
  {cat:"📚 Study",q:[{t:"Use books/notes",v:0,msg:"Offline study saves energy 📖"},{t:"Laptop 2 hrs",v:2,msg:"Some energy use 💻"},{t:"Laptop 6+ hrs",v:5,msg:"Heavy laptop footprint"}]},
  {cat:"🎧 Music",q:[{t:"Radio/offline",v:0,msg:"Offline green 🎵"},{t:"Streaming few songs",v:1,msg:"Some streaming ok 🎶"},{t:"Streaming 5+ hrs",v:3,msg:"Heavy streaming burns 💻"}]},
  {cat:"🥤 Beverage",q:[{t:"Home-made tea",v:0,msg:"Zero waste ☕"},{t:"Café takeaway",v:2,msg:"Some waste 🌫️"},{t:"Café daily",v:4,msg:"Daily cups ↑ carbon 🥤"}]},
  {cat:"🚮 Food waste",q:[{t:"Finish meal",v:0,msg:"No waste 👍"},{t:"Some leftovers",v:3,msg:"Waste resources 🍲"},{t:"Waste a lot",v:6,msg:"Food waste ↑ CO₂ 💥"}]},
  {cat:"📴 Gadgets",q:[{t:"Switch off charger",v:0,msg:"Saves electricity ⚡"},{t:"Standby mode",v:2,msg:"Standby consumes 💡"},{t:"Leave on 24h",v:5,msg:"High energy use 🔌"}]},
  {cat:"🌿 Garden",q:[{t:"Plant trees",v:0,msg:"Plants clean air 🌱"},{t:"Small garden",v:1,msg:"Some green 🌳"},{t:"No plants",v:3,msg:"No carbon sink 😕"}]},
  {cat:"🚌 Commute",q:[{t:"Public bus",v:0,msg:"Eco commute 🚍"},{t:"Carpool",v:2,msg:"Better than solo 🚗"},{t:"Drive alone",v:5,msg:"Solo drive = more CO₂"}]},
  {cat:"🎁 Gifts",q:[{t:"Eco gift",v:0,msg:"Sustainable gift 🎁"},{t:"Plastic gift wrap",v:2,msg:"Plastic waste 🌫️"},{t:"High consumption gift",v:5,msg:"CO₂ heavy 🎉"}]},
  {cat:"🏠 Housing",q:[{t:"Solar/LED",v:0,msg:"Green home 🌞"},{t:"Normal electricity",v:3,msg:"Some CO₂ ⚡"},{t:"High energy use",v:6,msg:"High footprint 🏠"}]},
  {cat:"🚶 Fitness",q:[{t:"Walk/Run",v:0,msg:"Healthy & green 🏃‍♂️"},{t:"Gym 1 hr",v:2,msg:"Some energy 💪"},{t:"Gym 3+ hrs",v:5,msg:"More footprint 💥"}]},
  {cat:"🍬 Snacks",q:[{t:"Fruits/Nuts",v:0,msg:"Healthy & green 🍏"},{t:"Packaged snack",v:2,msg:"Some CO₂ 🌫️"},{t:"Daily junk",v:5,msg:"High carbon snack 🍭"}]}
];
// DOM elements
const questionsContainer = document.getElementById("questions");
const pet = document.getElementById("pet");
const speechBubble = document.getElementById("speechBubble");
const thermoMercury = document.getElementById("thermoMercury");
const thermoNumber = document.getElementById("thermoNumber");
let currentSelections = [];

// Display questions and options
function displayQuestions() {
    questionsContainer.innerHTML = ""; // clear previous questions
    questions.forEach((qblock, i) => {
        const h3 = document.createElement("h3");
        h3.textContent = qblock.cat;
        h3.className = "question-category";
        questionsContainer.appendChild(h3);

        qblock.q.forEach((opt, j) => {
            const btn = document.createElement("div");
            btn.className = "option-btn";
            btn.textContent = opt.t;
            btn.dataset.value = opt.v;
            btn.dataset.msg = opt.msg;
            btn.dataset.cat = i;

            btn.onclick = () => {
                // Remove previous selection
                const prev = document.querySelector(`.option-btn[data-cat='${i}'].selected`);
                if (prev) prev.classList.remove("selected");
                btn.classList.add("selected");
                currentSelections[i] = opt.v;

                // Show speech bubble
                speechBubble.textContent = opt.msg;
                speechBubble.style.opacity = 1;
                setTimeout(() => { speechBubble.style.opacity = 0; }, 2000);

                // Update total points
                const totalPoints = currentSelections.reduce((a, b) => a + (b || 0), 0);

                // Update thermo mercury height and color
                const height = Math.min(100, 25 + totalPoints);
                thermoMercury.style.height = height + "%";
                if (totalPoints < 15) thermoMercury.style.background = "green";
                else if (totalPoints < 40) thermoMercury.style.background = "yellow";
                else if (totalPoints < 70) thermoMercury.style.background = "orange";
                else thermoMercury.style.background = "red";

                // Update numeric CO2 points
                thermoNumber.textContent = totalPoints + " pts";

                // Pop pet slightly
                pet.style.transform = "scale(1.3)";
                setTimeout(() => { pet.style.transform = "scale(1)"; }, 300);

                // Update pet dynamically based on points
                if (totalPoints < 15) pet.textContent = "🐱";
                else if (totalPoints < 40) pet.textContent = "😼";
                else if (totalPoints < 70) pet.textContent = "👾";
                else pet.textContent = "👹";
            };

            questionsContainer.appendChild(btn);
        });
    });
}

// End of day function
function endDay() {
    const totalPoints = currentSelections.reduce((a, b) => a + (b || 0), 0);
    let msg = "";
    if (totalPoints < 15) msg = "Your pet stayed cute 🌿!";
    else if (totalPoints < 40) msg = "Your pet is growing suspicious 👽!";
    else if (totalPoints < 70) msg = "Your pet turned into an alien 👾!";
    else msg = "Your monster exploded! 👹🔥";

    const endMsg = document.createElement("div");
    endMsg.id = "endMsg";
    endMsg.innerHTML = `<h2>Day ended!</h2><p>Total CO₂ points: ${totalPoints}</p><p>${msg}</p>`;
    endMsg.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.85);color:#0ff;padding:30px;border-radius:20px;text-align:center;z-index:9999;font-family:'Orbitron',sans-serif;box-shadow:0 0 20px #0ff;";
    document.body.appendChild(endMsg);

    // Pet pop
    pet.style.transform = "scale(1.5)";
    setTimeout(() => { pet.style.transform = "scale(1)"; }, 800);

    setTimeout(() => {
        document.body.removeChild(endMsg);
        location.reload();
    }, 5000);
}

// Initialize
window.onload = displayQuestions;
document.getElementById("endDay").onclick = endDay;
