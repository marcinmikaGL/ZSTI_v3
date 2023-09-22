labels = ["imie","naziwsko","pole","cos","wiek"];
wym = labels.length;
for(i=0;i<wym;i++) { 
   document.body.innerHTML += labels[i]+":<input type='text' id='"+labels[i]+"'><br>"; 
}
document.body.innerHTML += "<button onclick='funkcja()'>knefel</button>";
document.body.innerHTML += "<div id='wypluwacz'>tekst</div>";

function funkcja() {
imie = document.getElementById("imie").value;
naziwsko = document.getElementById("naziwsko").value;
pole = document.getElementById("pole").value;
cos = document.getElementById("cos").value;
dane = "imie:";
dane += imie;
dane += "<br>";
dane += "nazwisko:";
dane += naziwsko;
dane += "<br>";
dane += pole; 
dane += "<br>";
dane += cos;
dane += "<br>";
dane += wiek; 
document.getElementById("wypluwacz").innerHTML = dane;
}

