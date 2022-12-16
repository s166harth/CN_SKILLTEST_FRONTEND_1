
const input = document.getElementById("task-input");
const prioritylevel = document.getElementById("priority-level");
const submitbutton = document.getElementById("submit-button");
const all = document.getElementById("all");
const incomplete = document.getElementById("incomplete");
const completed = document.getElementById("completed");
const search = document.getElementById("search");
const list = document.getElementById("task-list");

const submittask = () =>{
    var task = input.value;
    var priority = prioritylevel.value;
    var x = document.createElement("li");
    x.innerHTML = `<p class="${priority}" id="task">${task}</p><button onclick="markcompleted()"><i class="fa-solid fa-check"></i></button>`
    list.append(x);
    console.log("worked");
}
const markcompleted = () => {
    var x = document.getElementById("task");
    x.className = "completed";
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


