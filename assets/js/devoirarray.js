function exercice1() {
	//création d'un tableau
	let tableau = ["pomme", "poire", "banane", "pêche"];

	//retirer la dernière valeur et la mettre au début
	let tableaufinal = tableau.pop();
	tableau.unshift(tableaufinal);

	//afficher le résultat
	document.getElementById('exercice1Resultat').innerHTML = tableau;
}


function exercice2() {
	//récupère le texte à traiter
	let text = document.getElementById('texteExercice2').value;

	//découper le texte en mots (selon les espaces)
	let words = text.split(" ");

	//transformer chaque mot en majuscule
	let upperText = words.toString();
	let resultat = upperText.toUpperCase();

	//affichage du résultat
	document.getElementById('exercice2Resultat').innerHTML = resultat;
}


function exercice3() {
	//récupère le texte à traiter
	let text = document.getElementById('texteExercice3').value;

	//découper le texte en mots (selon les espaces)
	let words = text.split(" ");

	//retirer les mots de 3 ou moins de caractères
	const cleanwords = words.filter(word => word.length >= 3);

	//affichage du résultat
	document.getElementById('exercice3Resultat').innerHTML = cleanwords;
}


function exercice4() {
	//récupère le texte à traiter
	let text = document.getElementById('texteExercice4').value;

	//découper le texte en mots (selon les espaces)
	let words = text.split(" ");

	//création d'un tableau
	let tableau = [];

	//méthode forEach
	tableau.forEach()

	//?????????

	//affichage du tableau
	var resultat = document.getElementById("exercice4Resultat");
}
