let films =[
    {
        titre :"tarzan",
        auteurRealisateur: "king-kong",
        dsortie: "12/11/11",
        synopsis: "synopsis",
        nbentree: 2000,
        acteurs: ["Justine","Pablo","Sabrina"]
    },
    {
        titre :"king-kong",
        auteurRealisateur: "tarzan",
        dsortie: "11/11/11",
        synopsis: "synopsis",
        nbentree: 6000
        /*acteur: [{prenom:"Kevin", nom:"praline"},
                {prenom:"Bob",nom: "marley"},
                {prenom:"Ruben", nom:"avone"}
        ],*/
    }]; 

    
function addfilms(film){
                                                       //////////fonction qui permet d'ajouter un film 
    return '<div class="list-film">' + "\n"+
    '<div>' +film.titre +'</div>'+ "\n"+
    '<div>' +film.auteurRealisateur +'</div>'+ "\n"+
    '<div>' +film.dsortie +' </div>'+ "\n"+               ///ajout d'un nouveau film
    '<div>' +film.synopsis+'</div>'+ "\n"+
    '<div>' +film.nbentree+'</div>'+
    '</div>'
}
let newFilm = {
    titre: "king kong",
    auteurRealisateur: "pablo",
    dsortie: "11/22/33",                     ////////info sur le film ///////////
    synopsis: "salut",
    nbentree: 2000 + " Entrées",
    

};

let button = document.createElement('button');
button.textContent ="touch me sexy girl...!";
button.onclick= function(){alert(films[0].auteurRealisateur)
};

//button.onclick=function(){
    //addfilms(newFilm);  


document.getElementById('film').appendChild(button);

document.getElementById('film').insertAdjacentHTML("beforeend", addfilms(newFilm));
document.getElementById('film').insertAdjacentHTML("beforebegin", "<h1>Film a l'affiche </h1>");
document.getElementById('film').insertAdjacentHTML("afterend", '<span id="copyright">Copyright©</span>');
document.getElementById('copyright').insertAdjacentText("beforebegin","@");
document.getElementById('copyright').insertAdjacentText("beforebegin", "2019 ");
document.getElementById('copyright').insertAdjacentText("afterend"," Brusset Pablo");
document.getElementById('film').insertAdjacentHTML("beforebegin", '<h2 id="sousTitre">Liste des films</h2>');



films.forEach(function(film){
    let filmHtml= '<div class="list-film"></div>' + "\n"+
    '<div>' +film.titre +'</div>'+ "\n"+
    '<div>' +film.auteurRealisateur +'</div>'+ "\n"+
    '<div>' +film.dsortie +' </div>'+ "\n"+
    '<div>' +film.synopsis+'</div>'+ "\n"+
    '<div>' +film.nbentree+'</div>'
    document.getElementById("film").insertAdjacentHTML("beforeend",filmHtml);

});


