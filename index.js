//function to add item to list
function addItem() {
    $('#js-shopping-list-form button').on('click', function(event) {
        event.preventDefault();

        let groceryItem = $('input').val();
        
        let newList = $(`<li><span class="shopping-item">${groceryItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);

        if (groceryItem) {
            $('.shopping-list').prepend(newList);
        }
        else {
            return;
        }
    })
}

//function to toggle item's checkmark status
function toggleItem() {
    
    //no need for a for loop, needs event delegation for new items
    $('ul').on('click', 'button.shopping-item-toggle', toggleChecked);

    function toggleChecked() {
        //class doesn't use . in toggleClass
        $(this).parent().prev().toggleClass('shopping-item__checked');
    }
}

//function to delete item
function deleteItem() {
    $('ul').on('click', 'button.shopping-item-delete', deleteItem);

    function deleteItem() {
        $(this).parent().parent().remove();
    }
}

$(addItem);
$(toggleItem);
$(deleteItem);