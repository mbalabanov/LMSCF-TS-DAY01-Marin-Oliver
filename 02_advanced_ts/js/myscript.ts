
let menudata: any[] = [
        {
        id: 0,
        name: "Tafel&shy;spitz",
        info: "Der Tafelspitz ist ein Gericht der Wiener Küche, dessen Bezeichnung bayerisch-österreichische Wurzeln hat.",
        image: "img/01_tafelspitz.jpg",
        likes: 0
       },
       {
        id: 1,
        name: "Wiener Schnit&shy;zel mit Erdapfel&shy;salat",
        info: "Wiener Schnitzel ist ein dünnes, paniertes und ausgebackenes Schnitzel aus Kalbfleisch. Es gehört zu den bekanntesten Spezialitäten der Wiener Küche.",
        image: "img/02_wiener_schnitzel.jpg",
        likes: 0
        },
        {
        id: 2,
        name: "Fiaker&shy;gulasch",
        info: "Eine üppigere Abwandlung des Wiener Gulaschs ist das Fiakergulasch, das zusätzlich mit gebratenen oder frittierten Frankfurter Würsteln, Spiegelei, fächerartig geschnittener Essiggurke und eventuell Semmelknödeln serviert wird.",
        image: "img/03_fiakergulasch.jpg",
        likes: 0
        },
        {
        id: 3,
        name: "Leber&shy;käs&shy;semmel",
        info: "Als Fleischkäse, Leberkäse (auch -kas) oder Fleischlaib bezeichnet man eine Brühwurstsorte[1]. Charakteristisch ist seine eckige Pastetenform. Leber findet bei der Herstellung zumeist keine Verwendung. Die Bezeichnung als Käse leitet sich lediglich von der Form der Laibe ab.",
        image: "img/04_leberkassemmel.jpg",
        likes: 0
        },
        {
        id: 4,
        name: "Geröstete Knödel mit Ei",
        info: "Geröstete Knödel mit Ei ein vegetarisches Gericht und eine schmackhafte Resteverwertung, als Snack oder als Hauptspeise, mit Salat als Beilage schmecken sie besonders gut.",
        image: "img/05_geroestete_knoedel.jpg",
        likes: 0
        },
        {
        id: 5,
        name: "Natur&shy;schnitzel mit Reis",
        info: "Naturschnitzel zählen zu den klassischen Gerichten der Wiener Küche. Das Fleisch wird in Butter gebraten und dann mit Fond aufgegossen. So bekommt man einen schmackhaften Buttersaft. Es ist sehr einfach zu zubereiten, trotzdem muss man sorgsam vorgehen und wirklich nur gute Fleischqualität wählen, sonst wird das Gericht leicht zäh.",
        image: "img/06_naturschnitzel.jpg",
        likes: 0
        },
        {
        id: 6,
        name: "Geröstete Leber mit Sauce Tartare",
        info: "Aus der Wiener Küche waren Geröstete Leber und Beuschel sowieso nie wegzudenken. Die Spuren der Gerösteten Leber lassen sich bis in die gutbürgerliche Küche des 19. Jahrhunderts zurückverfolgen. Zart gekocht und mit feinen Nuancen zahlreicher Gewürze durchzogen, ist sie auch heute noch sehr beliebt, schmeckt herzhaft und ist definitiv ein Wiener Kulturgut.",
        image: "img/07_eiernockerln.jpg",
        likes: 0
        },
        {
        id: 7,
        name: "Eier&shy;nockerl mit Salat",
        info: "lassisch und gut: Eiernockerl sind ein traditionelles österreichisches Gericht und ganz einfach selbst zuzubereiten. Unverzichtbar ist dabei der grüne Salat.",
        image: "img/08_geroestete-leber.jpg",
        likes: 0
        }
    ];

let sortByLikes: boolean = false;
let foodListContent: string = '';
let sequence: any = [];

function generateFood() {
    foodListContent = '';
    $('#foodcards').replaceWith(`<div class="row text-center" id="foodcards"></div>`);
    if (sortByLikes == true) {
        sequence = [];
        menudata.sort(function(a, b) { return b.likes - a.likes });
        for (let sortThrough in menudata) {
            sequence.push(menudata[sortThrough].id);
        }
    } else if (sortByLikes == false) {
        sequence = [];
        menudata.sort(function(c, d) { return c.id - d.id });
        for (let sortBy in menudata) {
            sequence.push(menudata[sortBy].id);
        }
    };
    for (let tempID in sequence) {
        foodListContent += `
        <div class="card text-white m-5 p-1 col-lg-3 col-md-3 col-sm-3 bg-success">
            <div class="row no-gutters">
                <div class="col-lg-4 col-md-5 col-sm-12">
                    <img src="${menudata[tempID].image}" class="card-img rounded-circle my-5" alt="${menudata[tempID].name}" data-toggle="modal" data-target="#modal${menudata[tempID].id}">
                </div>
                <div class="col-lg-7 col-md-8 col-sm-12">
                    <div class="card-body text-left">
                        <h5 class="card-title" data-toggle="modal" data-target="#modal${menudata[tempID].id}">${menudata[tempID].name}</h5>
                        <p class="card-text text-truncate" data-toggle="modal" data-target="#modal${menudata[tempID].id}"><small>${menudata[tempID].info}</small></p>
                        <h4 class="card-text likeMe" id="${tempID}"><small>Like&nbsp;<i class="fa fa-thumbs-up"></i></small>&nbsp;&nbsp;<span class="badge badge-light text-success rounded-circle">${menudata[tempID].likes}</span></h4>
                    </div>

                </div>
            </div>
        </div>
        <div class="modal fade" id="modal${menudata[tempID].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-success text-white">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${menudata[tempID].name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><img src="${menudata[tempID].image}" class="img-fluid close" data-dismiss="modal" alt="${menudata[tempID].name}"></p>
                        <h3>${menudata[tempID].name}</h3>
                        <p>${menudata[tempID].info}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    };
    $('#foodcards').replaceWith(`<div class="row text-center" id="foodcards">${foodListContent}</div>`);
    setEventListeners();
};

function setEventListeners() {
    $('.likeMe').click(function() {
        menudata[this.id].likes ++;
        generateFood();
    });
};

$('#sortLikesAscending').click(function() {
    sortByLikes = true;
    generateFood();
    $('#sortStatus').replaceWith(`<div id="sortStatus"><small>Sorted by likes</small></div>`);
});

$('#doNotSort').click(function() {
    sortByLikes = false;
    generateFood();
    $('#sortStatus').replaceWith(`<div id="sortStatus"><small>Unsorted</small></div>`);
});