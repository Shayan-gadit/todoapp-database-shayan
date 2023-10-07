// id render section 

var inp = document.getElementById('inp');
var list = document.getElementById('list');
var todoList = [];

// function render section

// function addTodo() {
//     if (inp.value == "") {
//         alert("please enter your value");
//         return;
//     }
//     todoList.push(inp.value);
//     inp.value = "";
//     render();
//     // console.log(addTodo);
// }


// database 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, push, ref,update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChR6K359qCVL41VsAEVALy3CrnqSBCdoI",
    authDomain: "todoapp-shayangadit.firebaseapp.com",
    projectId: "todoapp-shayangadit",
    storageBucket: "todoapp-shayangadit.appspot.com",
    messagingSenderId: "506148126888",
    appId: "1:506148126888:web:72935889a9279e5c7b829d",
    measurementId: "G-LPEYB9PHZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

window.addTodo = function () {
    if (inp.value == "") {
        alert("please enter your value");
        return;
    }
    todoList.push(inp.value);
    
    render();
    var tasks = { inp: inp.value, };
    var referKey = ref(database);
    var todoKey = push(referKey).key;
    tasks.id = todoKey;
    console.log(tasks);
    var reference = ref(database, `todos/${tasks.id}`);
    set(reference, tasks);
    inp.value = "";
}
function render() {
    list.innerHTML = "";
    for (var i = 0; i < todoList.length; i++) {
        list.innerHTML += `<li class="lia">${todoList[i]}
        <button onclick = "deleteTodo(${i})" id="btn">X</button> <button onclick = "editTodo(${i})" id="btn" >Edit</button>   </li>`;
    }
}
window.editTodo = function(indexNum,id) {
    todoList[indexNum] = prompt("enter your value");
    var refer = ref(database,`todos/${id}`);
    update(refer,{
        inp: prompt(),
    });
    render();
}
window.deleteTodo = function(indexNum){
    todoList.splice(indexNum, 1);
    render();
}

//================project done=====






