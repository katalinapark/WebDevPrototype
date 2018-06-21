
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("key", ev.target.id);

}

function drop(ev) {
   ev.preventDefault();
    var data = ev.dataTransfer.getData("key");
    ev.target.appendChild(document.getElementById(data));
   
}



function removeWall() {
    var x = document.getElementById("drag2"); 
    x.remove(x.selectedIndex);
}

function removeSprite() {
    var x = document.getElementById("drag1"); 
    x.remove(x.selectedIndex);
}
function myCreateFunction() {
    var numberofRows= document.getElementById("inputRows");
    for (var i = 0; i <numberofRows.value; i++) {
        var table =document.getElementById("myTable");
        var row = document.getElementById("clone");
        var clone = row.cloneNode(true); 
        clone.id = i + "newID"; 
        table.appendChild(clone); 
    }
}
function createColumns() {
    var numberOfColumns= document.getElementById("inputColumns");
    for (var i = 0; i <numberOfColumns.value; i++) {
        var table =document.getElementById("myTable");
        var column = document.getElementById("cc");
        var cc = column.cloneNode(true); 
        cc.id = i + "newID"; 
        table.appendChild(cc); 
    }
}



