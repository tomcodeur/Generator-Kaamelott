// Tableau de citations
let citations = [
    ["Y a pas à dire, dès qu'il y a du dessert, le repas est tout de suite plus chaleureux !", "Arthur"],
    ["Interprèèète ? Interprèèète, couhillère ?", "Le roi burgonde"],
    ["Eh oui mémé, t'es bien mouchée!", "Karadoc"],
    ["Hé toi là-bas avec ton casque à cornes, présente-moi ta femme, tu sauras pourquoi t'as des cornes !", "Merlin"],
    ["C’est pas faux.", "Perceval"],
    ["Sans vouloir la ramener, la seule différence concrète avec des briques, c'est que vous appelez ça des tartes !", "Léodagan"],
    ["Eh ben moi une fois, j’ai pissé par la fenêtre !", "Guenièvre"],
    ["Elle est où la poulette ?", "Kadoc"],
    ["JE NE MANGE PAS DE GRAINES !", "Le maître d'armes"],
    ["(À Karadoc) Vous vous prenez peut-être pour une statue grecque ?", "Séli"],
    ["Et deux jus de pomme qui piquent !", "Le tavernier"],
    ["Je vous ai déjà dit que je prête du pognon à des taux vraiment pas dégueulasses ?", "Venec"],
    ["Bah ça va, je picole pas souvent !", "Lancelot"],
    ["Attention, attention… il va y arriver un moment où il y a des granges qui vont se mettre à flamber, faudra pas demander d’où ça vient !", "Guethenoc"],
    ["Et surtout : pensez POUVOIR !", "Demetra"],
    ["Y'a toujours au moins deux solutions à un problème.", "Élias de Kelliwic'h"],
    ["Au même titre que le bar est fermé, sauf si c'est un poisson, tout travail mérite salaire !", "Urgan"],
    ["Mais je vous empêche pas de faire la guerre, mais vous la ferez guéri !", "Ygerne"],
    ["Moi, je me suis fait dérober de l'alimentation tout le long du voyage ! Une véritable dérobade !", "Yvain"],
    ["Ave Cesar, rosae rosam, et spiritus rex ! Ah non, parce que là, j’en ai marre !.", "Loth"],
    ["J'ai rêvé qu'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !", "Grüdü"]
  ];

// console.log(citations[0]);

let bouton = document.getElementById('nouveau');
let phrase = document.getElementById('citation');
let auteur = document.getElementById('auteur');

bouton.addEventListener('click', () => {

    const random = Math.floor(Math.random() * citations.length);
    phrase.textContent = citations[random][0];
    auteur.textContent = citations[random][1];

});