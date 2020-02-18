
/* Initializing variables */
let sortByLikes = false;
let foodListContent = '';
let sequence = [];

/* Generates the movie list by checking the settings for sorting.
    If "sort by likes" is selected, the array in the variable with the JSON data is sorted by the number of likes.
    If "unsorted" is selected, then the array in the variable with the JSON data is sorted by item ID.
    Then the JSON data is iterated. The constructed HTML is stored in a variable and rendering it into the div.
    Each movie item has an accompanying modal that is invisible to the user, until they click on a movie.*/
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

/* This sets the event listeners to the "like" buttons after the HTML is rendered.
    When a user clicks on "like", then the ID of the movie is read.
    The number of likes the variable containing the JSON data are incremented.
    The movie list is rendered into the HTML again to reflect the new number of likes.
    This rendering also changes the order of the items, if "sort by likes" is selected. */
function setEventListeners() {
    $('.likeMe').click(function() {
        menudata.food[this.id].likes ++;
        generateFood();
    });
};

/* When a user selects a sorting setting in the dropdown menu, the sortByLikes variable is set to TRUE. */
$('#sortLikesAscending').click(function() {
    sortByLikes = true;
    generateFood();
    $('#sortStatus').replaceWith(`<div id="sortStatus"><small>Sorted by likes</small></div>`);
});

/* When a user selects a sorting setting in the dropdown menu, the sortByLikes variable is set to FALSE. */
$('#doNotSort').click(function() {
    sortByLikes = false;
    generateFood();
    $('#sortStatus').replaceWith(`<div id="sortStatus"><small>Unsorted</small></div>`);
});

/* Exercise solved by Marin on Saturday, February 15, 2020 */