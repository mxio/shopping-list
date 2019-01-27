//function to add item to list
function addItem() {
    $('.js-shopping-list-form').on('click', function(event) {
        event.preventDefault();

        let groceryItem = $('input').val();

        let newList = $(`<li><span class="shopping-item">${groceryItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        
    })

    $('.shopping-list').append()
}

//function to toggle item's checkmark status
function toggleItem() {

}

//function to delete item
function deleteItem() {

}

$(addItem);
$(toggleItem);
$(deleteItem);