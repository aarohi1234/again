// write js code here corresponding to matches.html
var details=JSON.parse(localStorage.getItem("schedule"))
displaydata(details);

var show=JSON.parse(localStorage.getItem("favourites"))||[];
console.log(show)
function handleRoleFilter() {
    var selected = document.querySelector("#filtervenue").value;
   

    var filteredList = jobArr.filter(function (elem) {
      return elem.personRole == selected;
    });

    console.log(filteredList);
    displayData(filteredList);
  }
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
        col6.innerText="favourites";
        col6.style.color="blue";
        col6.style.cursor="pointer"
        col6.addEventListener("click",function(){
       nidhi(elem)
        })
        row1.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row1);
    })
    }
   function nidhi(elem){
       console.log(elem)
       show.push(elem);
       localStorage.setItem("favourites",JSON.stringify(show))
       window.location.href="favourites"
   }    


