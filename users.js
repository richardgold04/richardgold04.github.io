/*let users = [
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
Element.parent*/

/*function getServerData (url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch (url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    )
}



 document.querySelector("#getDataBtn").addEventListener("click", function() {
    getServerData ("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
     )
 })

 function fillDataTable (data, tableID) {
     let table = document.querySelector(`#${tableID}`);
     if (!table) {
         console.error("Table '${tableID}' is not found")
         return
     }

     let tBody = table.querySelector("tbody");
    for (let row of data){
        console.log(row)
        let tr = createAnyElement("tr");
        for(let k in row){
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);
    }
 }

function createAnyElement(name, attributes){
    let element = document.createElement(name);
    for (let k in attributes){
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function createButtonGroup(){
    let group = createAnyElement("div", {class: "btn btn-group"})
    
    let infoBtn = createAnyElement("button", {class: "btn btn-info", onclick: "getInfo()"});
    infoBtn.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    
    let delBtn = createAnyElement("button", {class: "btn btn-danger", onclick: "delRow(this)"});
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    
    group.appendChild(infoBtn);
    group.appendChild(delBtn);
    
    let td = createAnyElement("td");
    td.appendChild(group);
    return td;
}*/

//Adatok lekérése a szerverről, függvénnyel:
function getServerData(url) {
    //URL-re fetch-kérés:
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetchOptions).then(
        //ha megjött a válasz
        response => response.json(),
        //a függvény visszatérési értéke, jsonParse-olt adathalmaz
        err => console.error(err)
    );
}

//Eseménykezelő létrehozása a gombnál
//gomb kiválasztása, majd kattintásra aktiválódó függvény:
document.querySelector("#getDataBtn").addEventListener("click", function () {
    //adatok lekérése a szerverről, a konzolra kiírása:
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
})

//a táblázat szerveradatokkal való kitöltése, függvénnyel:
function fillDataTable(data, tableID) {
    //táblázat kiválasztása:
    let table = document.querySelector(`#${tableID}`);
    //hibakezelés, ha nem találja a táblázatot:
    if (!table) {
        console.error(`Table "${tableID}" is not found.`);
        //majd folytatás:
        return;
    };

    //táblázat kitöltése:
    let tBody = table.querySelector("tbody");
    //a táblázat sorainak létrehozása for ciklussal:
    for (let row of data) {
        let tr = createAnyElement("tr");
        //belső ciklus az egyes objektumos bejárásához, kulcs-érték párok alapján:
        for (let k in row) {
            //cellák létrehozása:
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td);
        }
        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);
    }
}

//segédfüggvény készítése:
function createAnyElement(name, attributes) {
    //elem létrehozása:
    let element = document.createElement(name);
    //for in ciklussal végigmenni az elemeken:
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    //elem visszaadása:
    return element;
}

//A gombok elkészítése, segédfüggvénnyel:
function createBtnGroup() {
    let group = createAnyElement("div", {class: "btn btn-group"});
    let infoBtn = createAnyElement("button", {class: "btn btn-info", onclick: "getInfo()"});
    infoBtn.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    let delBtn = createAnyElement("button", {class: "btn btn-danger", onclick: "delRow(this)"});
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    group.appendChild(infoBtn);
    group.appendChild(delBtn);
    let td = createAnyElement("td");
    td.appendChild(group);
    return td;
}

function setBtnEvents()


//delRow függvény elkészítése:

function delRow(btn) {
let tr = btn.parentElement.parentElement.parentElement;
let id = tr.querySelector("td:first-child").innerHTML;
}