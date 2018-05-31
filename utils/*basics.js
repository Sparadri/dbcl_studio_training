// *************** VANILLA JS FUNCTIONS **********************

var list = document.getElementById("players");
console.log(list.nodeName);

list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

var paragraph = document.querySelector(".red");
console.log(`Paragraph selected: "${paragraph.innerText}"`);


var list = document.getElementById("players");
var element = list.querySelector(".red");
console.log(element.innerText);



// selecting multiple elements
var countries = document.querySelectorAll("#fifa-wins li");
console.log(countries);
console.log(countries.length);
countries.forEach((item) => {
  console.log(item.innerText);
});


var element = document.getElementById("id");

// Hide
element.style.display = "none";

// Show
element.style.display = "";

element.classList.add("red");
element.classList.remove("red");
element.classList.toggle("red");


// <a href="https://www.lewagon.com" id="home">Le Wagon <em>rocks</em></a>
var home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);


// datasets
// <div id="user" data-uid="2471555" data-github-nickname="Papillard">Boris Paillard </div>
const boris = document.getElementById('user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);
