const newHeader = document.createElement('h1');
newHeader.id = 'victory';

document.body.appendChild(newHeader);

const yourName = 'Miriam';
newHeader.innerHTML = `${yourName} is the champion`;

const element = document.createElement("div");
element.className = "pet-listing dog"; 
element.classList.remove("dog"); 
element.classList.add("cat", "sale"); 

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  li.textContent = "Hi there!";
  console.log(li.textContent);
  ul.append(li);
}

element.append(ul);

const main = document.getElementById("main");
main.className = "pet-listing cat sale"; 

main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

document.body.append(element);

element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

ul.remove();
