
const input = document.getElementById("task-input");
const prioritylevel = document.getElementById("priority-level");
const submitbutton = document.getElementById("submit-button");
const all = document.getElementById("all");
const incomplete = document.getElementById("incomplete");
const completed = document.getElementById("completed");
const search = document.getElementById("search");
const list = document.getElementById("task-list");
var counter = 0;
const submittask = () =>{
    var task = input.value;
    var priority = prioritylevel.value;
    var x = document.createElement("li");
    x.innerHTML = `<p class="${priority}" id="${counter}-task">${task}<button onclick="markcompleted(this)"><i class="fa-solid fa-check"></i></button><button onclick="deleteitem(this)"><i class="fa-solid fa-trash"></i></button></p>`
    list.append(x);
    counter++;
    console.log("worked");
}
const deleteitem = (elem) =>{
  elem.parentElement.style.display = "none";
}
const markcompleted = (elem) => {
    
    elem.parentElement.className = "completed";
}

search.onkeyup =()=> {

  var  filter, li, txtValue,p;
  filter = search.value.toUpperCase();
  li = list.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    p= li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.display = "";} else {
      li[i].style.display = "none";
    }
  }
}
completed.onclick=()=>{
  li = list.getElementsByTagName('li');
  for(i=0;i<li.length;i++)
  {
    var txt = li[i].getElementsByTagName("p")[0].className;
    console.log(txt);

    if(txt=="completed"){
     li[i].style.display = "";}
       else {
      li[i].style.display = "none";
    }
  } 
 }

incomplete.onclick=()=>{
  li = list.getElementsByTagName('li');
  for(i=0;i<li.length;i++)
  {
    var txt = li[i].getElementsByTagName("p")[0].className;
    console.log(txt);

    if(txt!="completed"){
     li[i].style.display = "";}
       else {
      li[i].style.display = "none";
    }
  } 
 }
all.onclick=()=>{
  li = list.getElementsByTagName('li');
  for(i=0;i<li.length;i++)
  {
    

   
     li[i].style.display = "";
       
    }
  
 }


