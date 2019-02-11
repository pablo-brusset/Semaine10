let films = [{
        titre: "tarzan",
        auteurRealisateur: "king-kong",
        dsortie: "12/11/11",
        synopsis: "synopsis",
        nbentree: 2000+" Entrées",
        acteurs: ["Justine", "Pablo", "Sabrina"]
    },
    {
        titre: "Boule et Bill",
        auteurRealisateur: "bill",
        dsortie: "33/33/33",
        synopsis: "synopsis",
        nbentree: 21000 +" Entrées",
        acteurs: ["Justine", "Pablo", "Sabrina"]
    }, ////données/////
    {
        titre: "king-kong",
        auteurRealisateur: "makake",
        dsortie: "11/11/11",
        synopsis: "synopsis",
        nbentree: 6000+" Entrées",
        /*acteur: [{prenom:"Kevin", nom:"praline"},
                {prenom:"Bob",nom: "marley"},
                {prenom:"Ruben", nom:"avone"}
        ],*/
    },
];


function addfilms(film) {
    //////////fonction qui permet d'ajouter un film 
    return '<div class="film">' + "\n" +
        '<div>' + film.titre + '</div>' + "\n" +
        '<div>' + film.auteurRealisateur + '</div>' + "\n" +
        '<div>' + film.dsortie + ' </div>' + "\n" + ///ajout d'un nouveau film
        '<div>' + film.synopsis + '</div>' + "\n" +
        '<div>' + film.nbentree + '</div>' +
        '</div>'
}
let newFilm = {
    titre: "king kong",
    auteurRealisateur: "pablo",
    dsortie: "11/22/33", ////////info sur le film ///////////
    synopsis: "salut",
    nbentree: 2000 + " Entrées",


};

let button = document.createElement('button');
button.textContent = "change the style ! ";
button.onclick = function () {
    /* alert(films[0].auteurRealisateur); */
    var l = this.classList;
    var r =l.toggle('c');
    if(r){
        changestyle();
    }else{
        changestyle2();
    }
};

//button.onclick=function(){
//addfilms(newFilm);  


document.getElementById('film').appendChild(button);

document.getElementById('film').insertAdjacentHTML("beforeend", addfilms(newFilm));
document.getElementById('film').insertAdjacentHTML("beforebegin", "<h1>Film a l'affiche </h1>");
document.getElementById('film').insertAdjacentHTML("afterend", '<span id="copyright">Copyright©</span>');
document.getElementById('copyright').insertAdjacentText("beforebegin", "@");
document.getElementById('copyright').insertAdjacentText("beforebegin", "2019 ");
document.getElementById('copyright').insertAdjacentText("afterend", " Brusset Pablo");
document.getElementById('film').insertAdjacentHTML("beforebegin", '<h2 id="sousTitre">Liste des films</h2>');



films.forEach(function (film) {
    let filmHtml = '<div class="film">' + "\n" +
        '<div class="info"><div>' + film.titre + '</div>' + "\n" +
        '<div>' + film.auteurRealisateur + '</div>' + "\n" +
        '<div>' + film.dsortie + ' </div>' + "\n" +
        '<div>' + film.synopsis + '</div>' + "\n" +
        '<div>' + film.nbentree + '</div></div></div>'
    document.getElementById("film").insertAdjacentHTML("beforeend", filmHtml);

});


function changestyle() {
    var tab = document.getElementsByClassName("film");
    tab = Array.from(tab);

    console.log(tab);
    tab.forEach(function (element) {
        element.style.color = "black";
        element.style.fontSize = "20px";
        element.style.padding = "10px";
        element.style.margin = "10px";
        element.style.backgroundImage="url('tarzan.jpeg')";
        element.style.backgroundSize="contain";
        element.style.backgroundRepeat="no-repeat";
        element.style.width="230px";
        element.style.height="auto";
        
    })
}

function changestyle2() {
    var tab = document.getElementsByClassName("film");
    tab = Array.from(tab); 

    console.log(tab);
    tab.forEach(function (element) {
        element.style.color = "red";
        element.style.fontSize = "20px";
        element.style.padding = "10px";
        element.style.margin = "10px";
        element.style.backgroundImage="url('kingkong.jpeg')";
        element.style.backgroundSize="contain";
        element.style.backgroundRepeat="no-repeat";
        element.style.width="230px";
        element.style.height="auto";
        
    })
};
