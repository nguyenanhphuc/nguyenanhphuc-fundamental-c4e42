let query = location.search;
console.log (query);
let value = query.split("?id=");
let thisId = value[1];
console.log(thisId);

fetch ('http://dummy.restapiexample.com/api/v1/employees')
.then(res => {
    return res.json();
  })
.then(data => {
    console.log (data);
    return data;
  })
.then(insertInfo);

function insertInfo (data) {
    let tableBody = document.getElementById('table-body-employee');
    let body ='';
    for (let i=0; i<data.length; i++) {
        if (thisId === data[i].id) {
            console.log (data[i]);
            let id = data[i].id;
            let name = data[i].employee_name;
            let salary = data[i].employee_salary;
            let age = data[i].employee_age;
            let image = data[i].employee_profile_image;
            body += `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${salary}</td>
            <td>${age}</td>
            <td>${image}</td>
        </tr>`;
        }
    }
    tableBody.innerHTML = body;
}




