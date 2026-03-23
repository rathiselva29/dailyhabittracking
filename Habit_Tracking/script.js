function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function habitInfo(type){

let text=""

if(type=="exercise"){

text="Exercise improves heart health and helps diabetes control. BP patients should prefer walking and yoga."

}

if(type=="water"){

text="Drinking water improves digestion and metabolism."

}

if(type=="reading"){

text="Reading improves focus and knowledge."

}

if(type=="meditation"){

text="Meditation reduces stress and improves mental health."

}

alert(text)

}

function completeHabit(name){

localStorage.setItem(name,true)

updateChart()

updateStreak()

}

function updateChart(){

let data=[

localStorage.getItem("water")?1:0,
localStorage.getItem("exercise")?1:0,
localStorage.getItem("reading")?1:0,
localStorage.getItem("meditation")?1:0

]

new Chart(document.getElementById("chart"),{

type:"bar",

data:{
labels:["Water","Exercise","Reading","Meditation"],
datasets:[{data:data}]
}

})

}

function updateStreak(){

let streak=Object.keys(localStorage).length

document.getElementById("streak").innerText="🔥 Streak: "+streak

}

updateChart()

function addHabit(){

let name=document.getElementById("habitInput").value

let div=document.createElement("div")

div.innerText=name

document.getElementById("customHabits").appendChild(div)

}