// Window Object
// let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length-1];

// const elements = document.all;  //Html Collection
// for(let i = 0; i < elements.length; i++){
//     console.log(elements[i]);
//  }

//  elements.forEach(function(element){
//     console.log(elements);
//  });

// const collection = Array.from(document.all);

// collection.forEach(function(collection){
//     console.log(collection);
// });

// value = document.all[8];
// value = document.body;
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.location.port;
// value = document.characterSet;
// value = document.URL;
// console.log(value);

// let value;

// value = document;
//Scriptler

// value = document.scripts;

// value = document.scripts.length;
// value = document.scripts[0];

//Linkler

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length-1];
// value = document.links[document.links.length-1].getAttribute("class");
// value = document.links[document.links.length-1].getAttribute("href");
// value = document.links[document.links.length-1].className;
// value = document.links[document.links.length-1].classList;

//Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name");

// value = document.forms[0].method

// console.log(value);

// Elementi Id ye göre seçme

// let element;

// element = document.getElementById("todo-form");
// element = document.getElementById("tasks-title");

// Element Class göre seçme

// element = document.getElementsByClassName("list-group-item");
// element = document.getElementsByClassName("card-header");

//Element Tag e göre seçme

// element = document.getElementsByTagName("div");

//Query Selector - Css Selector / Tek bir element döner

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");

// element = document.querySelector("li");


// element = document.querySelector(".list-group-item");

// element = document.querySelector("div");

// QuerySelectorAll / Tüm element seçimleri için

// element = document.querySelectorAll(".list-group-item")


// element.forEach(function(el){
//     console.log(el);
// })

// console.log(element);

// const element = document.querySelector("#clear-todos");

//Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);

// console.log(element.style);

// Style ve Element özelliklerini değiştirme!

// element.className = "btn btn-primary";
// element.style = "#000"
// element.style.marginLeft = "70px"

// element.href = "htps://www.google.com.tr"
// element.target = "_blank"

// element.textContent = "Silin";

// element.innerHTML = "<span style = 'color:red'>Silin</span>"

// let element2= document.querySelector("li:first-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelector("li:last-child");

// element2 = document.querySelectorAll("li:nth-child(odd)"); //Tek sayı tüm childları seçer
// element2 = document.querySelectorAll("li:nth-child(even)"); //Çift sayı tüm childları seçer

// element2.forEach(function(el){
//     el.style.background="grey";
//     el.style.color="aqua";
// });

// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color="aqua";
//     el.style.background="gray";
// });

// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardrow;

// Child Nodes

// value = todoList.childNodes
// value = todoList.childNodes[0]

// Children -Element

// value = todoList.children;
// value = todoList.children[2];
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[2].textContent="Adam";

// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent="Değişiyor aman Allahım"

// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;

// value = todoList.children.length;
// value = todoList.childElementCount;

// value = cardrow;
// value = cardrow.parentElement; //Üst Element
// value = cardrow.parentElement.parentElement //2 üst elemet almak

// Element Kardeşleri

// value = todo;

// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling.previousElementSibling; //null

//Yeni Element Oluşturma

/* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> */

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "http://www.exfenix.com";
// newLink.target = "_blank";

//Text Content


// cardbody.textContent = "sdfsdfsf" // !

// Text Node

// const text = document.createTextNode("Naber")
// cardbody.appendChild(text)

// newLink.appendChild(document.createTextNode("Hayalinde ki Sayfaya Git"));

// cardbody.appendChild(newLink)

// console.log(newLink);

// Dinamik Element Silme

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

//Remove Metodu

// todos[3].remove();


// Remove Child

// todoList.removeChild(todoList.lastElementChild);

// todoList.removeChild(todos[3]);


// console.log(todos)
// console.log(todoList)

// Replace // Elementleri Birbirleriyle Değiştirme

// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";

// Eski Element

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// console.log(newElement)

// const todoInput = document.getElementById("todo");
// let element;

// element = todoInput;
// element = todoInput.classList.length;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");


// element = todoInput;
// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","Naber");
// todoInput.setAttribute("title","Input");
// todoInput.removeAttribute("name");

// element = todoInput
// element = todoInput.hasAttribute("required");
// element = todoInput.hasAttribute("name");



// console.log(element);

// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// todoForm.addEventListener("submit", submitForm);

// function submitForm(e){
//     console.log("Submit Eventi")

//     e.preventDefault();
// }

// filterInput.addEventListener("focus", function(e){

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// console.log(e.target.placeholder);
// console.log(e.target.className);
// console.log("gördüm seni")
// });

// filterInput.onfocus = function(){
//     console.log("naber")
// }

// Klavye Eventleri ----

// keypress

// document.addEventListener("keypress",run);
// function run(e){
//     console.log(e.which); //Ascii Tablosuna göre
//     console.log(e.key) //Normal Tuş Alır
// }

// keydown // Klavyede ki tüm tuşları yakalar.

// document.addEventListener("keydown",run);
// function run(e){
//      console.log(e.which); //Ascii Tablosuna göre
//      console.log(e.key); //Normal Tuş Alır
// }; 

// keyup //Tuşu bırakınca oluşan evet

// document.addEventListener("keyup",run);
// function run(e){
//      console.log(e.which); //Ascii Tablosuna göre
//      console.log(e.key) //Normal Tuş Alır
// };     

// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//     header.textContent = e.target.value;
//     console.log(e.target.value);
// }

// Mouse Eventleri

// const cardBody = document.querySelectorAll(".card-body")[1];

// const title = document.querySelector("#tasks-title");


// Click Event

// title.addEventListener("click",run);

// Double Click

// title.addEventListener("dblclick",run);

// Mouse Down

// title.addEventListener("mousedown",run);

// Mouse Up

// title.addEventListener("mouseup",run)

// Mouse Over

// title.addEventListener("mouseover",run)

// Mouse Out

// title.addEventListener("mouseout",run)

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave

// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);

// function run(e){
//     console.log(e.type);
// }

// const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa Yüklendi")
// }

// Focus

// filter.addEventListener("focus",run)

// Blur

// filter.addEventListener("blur",run)

// Paste 

// filter.addEventListener("paste",run)

// Copy

// filter.addEventListener("copy",run)

// Cut

// filter.addEventListener("cut",run)

// Select

// filter.addEventListener("select",run)

// function run(e){
//     console.log(e.type);
// }

// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");
// });
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// });

// Event Capturing veya Delegation

// const cardbody = document.querySelectorAll(".card-body")[1];

// cardbody.addEventListener("click",run);
// function run(e){
//     if(e.target.className === "fa fa-remove"){
//         console.log("Silme işlemi");
//     }
//     if (e.target.id === "filter"){
//         console.log("Filtreleme İşlemi")
//     }
//     if (e.target.id === "clear-todos"){
//         console.log("Tüm taskları silme işlemi")
//     }
//     console.log(e.target)

// }