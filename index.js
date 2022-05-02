// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun)

var arr=JSON.parse(localStorage.getItem("schedule"))||[];
function myfun(){
event.preventDefault();
var obj={
    personmatch:masaiForm.matchNum.value,
    personselect:masaiForm.teamA.value,
    personselectb:masaiForm.teamB.value,
    persondate:masaiForm.date.value,
    personvenue:masaiForm.venue.value,
    personadd:masaiForm.submit.value
}
arr.push(obj) 
localStorage.setItem("schedule",JSON.stringify(arr))
window.location.href="matches.html"

}

