// exercice 1
function prenom() {

 // on récupère le prénom on le met dans l'élément avec id holder1
// compléter le code ici

    let name = document.getElementById('prenom').value;
    document.getElementById('holder1').innerHTML = name;

}

function nomdefamille() {
    // on récupère le nom on le met dans l'élément avec id holder1
    // compléter le code ici

    let lname = document.getElementById('nomdefamille').value;
    document.getElementById('holder1').innerHTML = lname;
}

function nomcomplet() {
    // on concatène prénom et nom pour afficher le nom entier et on met le résultat dans l'élément avec id holder1
    // compléter le code ici

    let name = document.getElementById('prenom').value;
    document.getElementById('holder1').innerHTML = name;
    let lname = document.getElementById('nomdefamille').value;
    document.getElementById('holder1').innerHTML = lname;
   
    let completname = name.concat(" ", lname);
    document.getElementById('holder1').innerHTML = completname;


}


// exercice 2
function segmentText() {
    // on récupère le texte de l'élément d'id texte, on le découpe et on le place dans l'élément avec id holder2
    // compléter le code ici

    let text = document.getElementById('texte').value;
    let separateurs = new RegExp("[ ,|]");
    const list = text.split(separateurs);
    document.getElementById('holder2').innerHTML = list;
}

