let users = [
    {lastname: "Manson", firstname: "Marilyn", age: 52},
    {lastname: "Five", firstname: "John", age: 46},
    {lastname: "Skold", firstname: "Tim", age: 40},
    {lastname: "Wayne Gacy", firstname: "Madonna", age: 51},
    {lastname: "Fish", firstname: "Ginger", age: 56}
];

let tableBody = document.querySelector("#userTable tbody")
let createTd = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-secondary";
    btnInfo.innerHTML = '<i class="fa fa-archive" style="font-size:24px;"></i>';

    let btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-primary";
    btnEdit.innerHTML = '<i class="fa fa-edit" style="font-size:24px;"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnEdit);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);

}

for (let k in users) {
    let tr = document.createElement("tr");
    createTd(parseInt(k)+1, tr)
    for (let value of Object.values(users[k])) {
        createTd(value, tr)
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}
Element.parent