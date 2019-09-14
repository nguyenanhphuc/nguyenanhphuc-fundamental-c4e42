// let h1 = document.getElementById('heading-1');

// console.log(h1);

// console.dir(h1);

// let headingTags = document.getElementsByClassName('heading');
// console.log(headingTags);

// let divs = document.getElementsByClassName(div);
// console.log(divs);

// let h1= document.getElementById('heading-1');
// h1.id = "Hello, my name is HEADING LEVEL 1";
// h1.style.color="red";
// let t=0;
// setInterval (() => {
//     if (t%2) {
//         h1.style.color = "red"
//     }
//     else {
//         h1.style.color = "black"
//     }
//     t++
// }, 300)
// console.log(h1);

// let a = document.getElementById('a1');
// a.href= "https://www.facebook.com/";
// a.innerHTML="Whatup";
// console.log(a);

// let h2 = `<h2>This is Heading Level 2</h2>`;
// let body = document.getElementById('nice-body');
// console.log(body);
// body.innerHTML += h2;

// let ul1 = `<ul>Danh sach ten cac cau thu</ul>`;
// let il1 = `<li>Ronaldo</li>`;
// let il2 = `<li>Messi</li>`;
// let il3 = `<li>Neymar </li>`; 

// let body=document.getElementById('nice-body');
// body.innerHTML += ul1;
// // body.innerHTML += il1;
// // body.innerHTML += il2;
// // body.innerHTML += il3;

// let h2 = document.getElementById('heading-2');
// h2.remove ();

// let h1= document.getElementById('heading-1');
// h1.addEventListener('click', function (){
//     console.log("Clicked");
// })

// let ul1=document.getElementById('ul-1');
// let li1 = `<li>Kante</li>`;
// let b1= document.getElementById('button-1');
// b1.addEventListener('click', function() {
//     ul1.innerHTML += li1;
// })

// let playerList = document.getElementById('ul-1');
// let addButton = document.getElementById('button-1');
// let names = ["Ronaldo","Messi","Neymar"]

// function renderListItem (name) {
//     let li=`<li class="player">${name}</li>`
//     playerList.innerHTML += li
// }

// names.forEach ((name) => {
//     renderListItem(name)
// })

// addButton.addEventListener('click', () => {
//     let name = prompt("Viet ten cau thu")
//     renderListItem(name)
// })

let myInput = document.getElementById('my-input');
let screen = document.getElementById('screen');

myInput.addEventListener('input', function(payload) {
    console.log (payload.target.value);
    screen.innerHTML = payload.target.value
})

