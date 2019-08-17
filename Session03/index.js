// const number = Math.random()
// // console.log (number);

// // const number2 = 1.4
// console.log(Math.floor(number*100)); // random 0 -> 100

// let n = Number(prompt("Enter your number"))
// let flag = true
// let count = 0
// for(let i=10; flag; i++){
//    let res = Math.floor(n /=10);
//     n = res;
//     if (res == 0){
//         flag = false
//     }
//     count += 1;
// }
// console.log(count);

//Mảng - Array, List
// CRUD = Creat Read Update Delete
// const monAn = ["com", "pho", "chao", "thit cho"]
// console.log(monAn)

// // Creat
// monAn.push("thit meo")
// console.log(monAn)
// monAn.push("thit ga")
// console.log(monAn)
// console.log(monAn[5])
// console.log(monAn.length);

// //Read
// for(let i = 0; i< monAn.length; i++) {
//     console.log(monAn[i]);
//     // monAn[i] = "thit cho"
// }

// // Update
// console.log(monAn);
// if (monAn.includes(monAn[6]) == false) {
//     monAn[6] = "bun dau";
// }
// console.log(monAn)

// //Delete
// monAn.splice(0, 1); // (index, số phần từ muốn xóa tính từ index)
// console.log (monAn);

console.log("Bai1");
// const ds = ["Cong Phuong","Van Toan","Quang Hai","Tuan Anh"];
// for (let i=0; i<ds.length; i++) {
// console.log (`${i+1}. ${ds[i]}`); // String formating
// }

// const n = prompt ("Do you want to add new member? Y= Yes/N = No");
// if (n == "Y") {
//     const m = prompt ("Enter a new member's name");
//     ds.push(m);
//     console.log ("Here is the new member list");
//     for (let i=0; i<ds.length; i++) {
//         console.log (`${i+1}. ${ds[i]}`); // String formating
//         }
    
// }
// else {
//     console.log ("Thank you!");
// }
// const l = prompt ("Do you want to change member's name? Y= Yes/ N= No");
// if (l == "Y") {
//     const o = prompt ("Enter member's number you want to change") - 1;
//     // const index = ds.indexOf(o);
//     ds[o] = prompt ("Enter a new member's name")
//     for (let i = 0; i< ds.length; i++) {
//         console.log(`${i+1}. ${ds[i]}`); // String formating
//     }
    
// }
// else {
//     console.log ("Thank you");
// }

console.log ("Bai2")
// const cpshop = ["ao", "giay", "bong", "tat"];
// console.log ("Danh sách item tại CPshop")
// for (let i=0; i<cpshop.length; i++) {
//     console.log (`${i+1}. ${cpshop[i]}`);
// }
// const w = prompt ("Welcome to CPshop, Bạn muốn lam gì? Chọn C, R, U, D")
// if (w=="c"){
//     const c = prompt ("Nhập item bạn muốn thêm");
//     cpshop.push(c)
//     console.log ("Danh sách item mới")
//     for (let i=0; i<cpshop.length; i++) {
//         console.log (`${i+1}. ${cpshop[i]}`);
// }
// }
// else if (w== "r"){
//     console.log ("Danh sách item hiện có")
//     for (let i=0; i<cpshop.length; i++) {
//         console.log (`${i+1}. ${cpshop[i]}`);
// }
// }
// else if (w== "u") {
//     const u = prompt ("nhập số thứ tự item bạn muốn sửa?") -1;
//     cpshop[u] = prompt ("Nhập tên mới của sản phẩm")
//     console.log ("Danh sách item mới")
//     for (let i=0; i<cpshop.length; i++) {
//         console.log (`${i+1}. ${cpshop[i]}`);
// }
// }
// else if (w== "d") {
//     const d = prompt ("nhập só thứ tự item bạn muốn xáo") -1;
//     cpshop.splice (d,1);
//     console.log ("Danh sách item mới")
//     for (let i=0; i<cpshop.length; i++) {
//         console.log (`${i+1}. ${cpshop[i]}`);
// }
// }
// else {
//     console.log ("Thank you")
// }

console.log ("Bai3")

const daySo = prompt ("nhập dãy số bât kỳ nhắn cách nhau bởi dấu ,");
const n = daySo.split(",");
console.log(n);
let tong = 0;
for (let i=0; i<n.length; i++) {
    tong += Number(n[i]);
}
console.log(tong);