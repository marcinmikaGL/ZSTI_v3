
document.body.innerHTML += '<input type="input" id="name">';
document.body.innerHTML += '<input type="input" id="surname">';
document.body.innerHTML +='<button onclick="funkcja()">klkl;k</button>';
document.body.innerHTML += '<div id="wypluwacz">tu pluje</div>';

function funkcja() {
name = document.getElementById("name").value;
surname = document.getElementById("surname").value;
wypluwacz = document.getElementById("wypluwacz");
wypluwacz.innerHTML = name + "<br>" + surname; 
}


