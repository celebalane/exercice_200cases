//var newLi = document.createElement('li');                //Créer un élément li//
//document.getElementById('liste').appendChild(newLi);     //Ajoute l'élément li créer à l'élément portant l'id liste et donc à ul//

//var newLiText = document.createTextNode(nombre);          //Créer du texte à l'intérieur de la variable//
//newLi.appendChild(newLiText);                            //Met le texte de la variable dans le li//

var nombre;

for(nombre=0; nombre<=200; nombre++) {
	var newLi = document.createElement('li');
	var newLiText = document.createTextNode(nombre);
	document.getElementById('liste').appendChild(newLi);
	newLi.appendChild(newLiText);  
}