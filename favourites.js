
var fab=JSON.parse(localStorage.getItem("favourites"))||[]
displaydata(fab);
function displaydata(data){
    data.forEach(function(elem){
        var row1=document.createElement("tr")
        var col1=document.createElement("td")
        col1.innerText=elem.personmatch
        var col2=document.createElement("td")
        col2.innerText=elem.personselect
        var col3=document.createElement("td")
        col3.innerText=elem.personselectb
        var col4=document.createElement("td")
        col4.innerText=elem.persondate
        var col5=document.createElement("td")
        col5.innerText=elem.personvenue
        var col6=document.createElement("td")
        col6.innerText="delete"
        col6.style.color="red"
        col6.addEventListener("click",function(){
            event.target.parentNode.remove()
            deleteitem(elem);
        })
        row1.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row1)
    }); 
    
}
