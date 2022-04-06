let rowQuantity = 0

window.onload = function() {initTable()}

function initTable() {
    document.querySelector('body').appendChild(document.createElement('table'));
    document.querySelector('table').appendChild(document.createElement('tr'));
    let td1 = document.createElement('th');
    let td2 = document.createElement('th');
    let td3 = document.createElement('th');
    td1.innerText = 'Title';
    td2.innerText = 'Platform';
    document.querySelector('tr').appendChild(td1);
    document.querySelector('tr').appendChild(td2);
    document.querySelector('tr').appendChild(td3);

    addRow();
    document.getElementById('row-0-title').value = 'Horizon Foribidden West';
    document.getElementById('row-0-platform').value = 'PS5';
    saveRow('row-0-save');

}

function addRow() {
    let table = document.querySelector('table');
    let row = document.createElement('tr');
    row.id = "row-" + rowQuantity;
    table.appendChild(row);
    document.getElementById('row-' + rowQuantity).innerHTML = "<td id='row-" + rowQuantity + "-td-1'><input type='text' id='row-" + rowQuantity + "-title'></td>";
    document.getElementById('row-' + rowQuantity).innerHTML += "<td id='row-" + rowQuantity + "-td-2'><input type='text' id='row-" + rowQuantity + "-platform'></td>";
    document.getElementById('row-' + rowQuantity).innerHTML += "<td id='row-" + rowQuantity + "-td-3'><button id='row-" + rowQuantity + "-save' onclick='saveRow(this.id)'>Save</button><button id='row-" + rowQuantity + "-remove' onclick='removeRow(this.id)'>Remove</button></td>";

    rowQuantity ++
}

function editRow(id) {
    id = id.split('-');
    id = id.splice(0,2);
    id = id.join('-')
    console.log(id + '-td-1');
    let title = document.getElementById(id + '-td-1').innerText;
    let platform = document.getElementById(id + '-td-2').innerHTML;

    document.getElementById(id + '-td-1').innerHTML = "<input type='text' id='" + id + "-title'>";
    document.getElementById(id + '-title').value = title;
    document.getElementById(id + '-td-2').innerHTML = "<input type='text' id='" + id + "-platform'>";
    document.getElementById(id + '-platform').value = platform;
    document.getElementById(id + '-td-3').innerHTML = "<button id='" + id + "-save' onclick='saveRow(this.id)'>Save</button><button id='" + id + "-remove' onclick='removeRow(this.id)'>Remove</button>";

}

function removeRow(id) {
    id = id.split('-');
    id = id.splice(0,2);
    id = id.join('-')
    document.getElementById(id).remove();

}

function saveRow(id) {
    id = id.split('-');
    id = id.splice(0,2);
    id = id.join('-');
    let title = document.getElementById(id + '-title').value;
    let platform = document.getElementById(id + '-platform').value;

    document.getElementById(id + '-td-1').innerText = title;
    document.getElementById(id + '-td-2').innerText = platform;
    document.getElementById(id + '-td-3').innerHTML = "<button id='" + id + "-edit' onclick='editRow(this.id)'>Edit</button><button id='" + id + "-remove' onclick='removeRow(this.id)'>Remove</button>" ;

}