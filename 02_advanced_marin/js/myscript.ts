let sortByLikes: boolean = false;
let foodListContent: string = '';
let sequence: number = [];

function generateFood() {
    foodListContent = '';
    $('#foodcards').replaceWith(`<div class="row text-center" id="foodcards"></div>`);
    if (sortByLikes == true) {
        sequence = [];
        menudata.food.sort(function(a, b) { return b.likes - a.likes });
        for (let sortThrough in menudata.food) {
            sequence.push(menudata.food[sortThrough].id);
        }
    } else if (sortByLikes == false) {
        sequence = [];
        menudata.food.sort(function(c, d) { return c.id - d.id });
        for (let sortBy in menudata.food) {
            sequence.push(menudata.food[sortBy].id);
        }
    };
    for (let tempID in sequence) {
        foodListContent += `
        <div class="card text-white m-4 p-1 col-lg-5 col-md-5 col-sm-4 bg-warning">
            <div class="row no-gutters">
                <div class="col-lg-5 col-md-5 col-sm-12">
                    <img src="${menudata.food[tempID].image}" class="card-img" alt="${menudata.food[tempID].name}" data-toggle="modal" data-target="#modal${menudata.food[tempID].id}">
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12">
                    <div class="card-body text-left">
                        <h5 class="card-title" data-toggle="modal" data-target="#modal${menudata.food[tempID].id}">${menudata.food[tempID].name}</h5>
                        <p class="card-text text-truncate" data-toggle="modal" data-target="#modal${menudata.food[tempID].id}"><small>${menudata.food[tempID].info}</small></p>
                    </div>
                    <div class="card-footer">
                        <h4 class="card-text text-right text-dark likeMe" id="${tempID}"><small>Like&nbsp;<i class="fa fa-thumbs-up"></i></small>&nbsp;&nbsp;<span class="badge badge-dark rounded-circle">${menudata.food[tempID].likes}</span></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal${menudata.food[tempID].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-secondary text-white">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${menudata.food[tempID].name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><img src="${menudata.food[tempID].image}" class="img-fluid close" data-dismiss="modal" alt="${menudata.food[tempID].name}"></p>
                        <h3>${menudata.food[tempID].name}</h3>
                        <p>${menudata.food[tempID].info}</p>
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
        menudata.food[this.id].likes ++;
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