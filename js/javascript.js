//var newLi = document.createElement('li');                //Créer un élément li//
//document.getElementById('liste').appendChild(newLi);     //Ajoute l'élément li créer à l'élément portant l'id liste et donc à ul//

//var newLiText = document.createTextNode(nombre);          //Créer du texte à l'intérieur de la variable//
//newLi.appendChild(newLiText);                            //Met le texte de la variable dans le li//

//////////////////////////////////////////////Etape 3//////////////////////////////////////////////////////////////////////

//var nombre;                                                //Variable qui me permet de changer le texte de chaque case//

//for(nombre=0; nombre<=200; nombre++) {                     //Boucle pour ajouter une case à chaque fois, de O à 200//
	//var newLi = document.createElement('li');
	//var newLiText = document.createTextNode(nombre);
	//document.getElementById('liste').appendChild(newLi);
	//newLi.appendChild(newLiText);  
//}

//////////////////////////////////////////////Etape 4////////////////////////////////////////////////////////////////////////

var nombreCase= parseInt(prompt('Quel nombre de case souhaitez-vous afficher?'));     //Affiche la question à l'utilisateur et affecte la réponse à la variable en s'assurant que ce soit un nombre//
var nombre;
nombre=1;
while (nombre <= nombreCase) {                                   //Boucle autant de fois que le nombre de case renseigné par l'utilisateur
	var newLi = document.createElement('li');
	var newLiText = document.createTextNode(nombre);
	document.getElementById('liste').appendChild(newLi);
	newLi.appendChild(newLiText);
	nombre++;                                                    //Ajoute +1 au nombre à chaque tour//
}

