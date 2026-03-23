function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function habitInfo(type){
  const modal = document.getElementById("habitModal");
  const details = document.getElementById("habitDetails");

  let content = "";
  if(type === "water"){
    content = `
      <h2>💧 Drink Water</h2>
      <h3>Overview</h3>
      <p>Drinking water is essential for maintaining hydration, supporting bodily functions, and promoting overall health.</p>
      <h3>Benefits</h3>
      <ul>
        <li>Improves digestion</li>
        <li>Helps metabolism</li>
        <li>Keeps the body hydrated</li>
        <li>Supports brain performance</li>
        <li>Improves skin health</li>
      </ul>
      <h3>Health Advice</h3>
      <p><strong>For Blood Pressure patients:</strong> Light hydration throughout the day is recommended.</p>
      <p><strong>For Diabetes patients:</strong> Proper hydration helps regulate blood sugar levels.</p>
      <h3>Daily Recommendation</h3>
      <p>Drink 6 to 8 glasses of water per day.</p>
    `;
  } else if(type === "exercise"){
    content = `
      <h2>🏋 Exercise</h2>
      <h3>Overview</h3>
      <p>Regular exercise strengthens muscles, improves cardiovascular health, and boosts mental well-being.</p>
      <h3>Benefits</h3>
      <ul>
        <li>Improves heart health</li>
        <li>Controls diabetes</li>
        <li>Reduces blood pressure</li>
        <li>Strengthens bones and muscles</li>
        <li>Enhances mood and reduces stress</li>
      </ul>
      <h3>Health Advice</h3>
      <p><strong>For beginners:</strong> Start with 20-30 minutes of moderate activity daily.</p>
      <p><strong>For joint issues:</strong> Focus on low-impact exercises like swimming.</p>
      <h3>Daily Recommendation</h3>
      <p>Aim for at least 30 minutes of moderate exercise most days of the week.</p>
    `;
  } else if(type === "reading"){
    content = `
      <h2>📚 Reading</h2>
      <h3>Overview</h3>
      <p>Reading expands knowledge, improves focus, and stimulates the mind.</p>
      <h3>Benefits</h3>
      <ul>
        <li>Improves brain activity</li>
        <li>Enhances focus and concentration</li>
        <li>Reduces stress</li>
        <li>Expands vocabulary and knowledge</li>
        <li>Boosts empathy and understanding</li>
      </ul>
      <h3>Health Advice</h3>
      <p><strong>For eye strain:</strong> Take breaks and ensure good lighting.</p>
      <p><strong>For mental health:</strong> Reading before bed can improve sleep quality.</p>
      <h3>Daily Recommendation</h3>
      <p>Read for 20-30 minutes daily to build the habit.</p>
    `;
  } else if(type === "meditation"){
    content = `
      <h2>🧘 Meditation</h2>
      <h3>Overview</h3>
      <p>Meditation involves focusing the mind to achieve calmness and clarity.</p>
      <h3>Benefits</h3>
      <ul>
        <li>Reduces stress and anxiety</li>
        <li>Improves mental clarity</li>
        <li>Enhances emotional health</li>
        <li>Improves sleep quality</li>
        <li>Increases self-awareness</li>
      </ul>
      <h3>Health Advice</h3>
      <p><strong>For beginners:</strong> Start with 5 minutes daily and gradually increase.</p>
      <p><strong>For chronic pain:</strong> Mindfulness meditation can help manage pain perception.</p>
      <h3>Daily Recommendation</h3>
      <p>Practice meditation for 10-15 minutes daily.</p>
    `;
  }

  details.innerHTML = content;
  modal.style.display = "block";
}

function closeModal(){
  document.getElementById("habitModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("habitModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function completeHabit(name){

localStorage.setItem(name,true)

launchConfetti()

updateChart()

updateStreak()

}

function updateStreak(){

let streak=Object.keys(localStorage).length

document.getElementById("streak").innerText="🔥 Habit Streak: "+streak

}

function updateChart(){
  const ctx = document.getElementById("progressChart").getContext("2d");
  const data = [
    localStorage.getItem("water") ? 1 : 0,
    localStorage.getItem("exercise") ? 1 : 0,
    localStorage.getItem("reading") ? 1 : 0,
    localStorage.getItem("meditation") ? 1 : 0
  ];

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Water", "Exercise", "Reading", "Meditation"],
      datasets: [{
        label: "Completed Today",
        data: data,
        backgroundColor: "rgba(255, 122, 24, 0.6)",
        borderColor: "#ff7a18",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

updateChart()

function addHabit(){

let name=document.getElementById("customHabit").value

let div=document.createElement("div")

div.innerText=name

document.getElementById("customList").appendChild(div)

}