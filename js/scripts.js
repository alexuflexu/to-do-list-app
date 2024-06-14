function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let text = document.createTextNode(inputValue);
  li.append(text);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);

    function crossOut() {
      li.toggleClass('strike');
    }

    li.on('dblclick', function () {
      li.toggleClass('strike');
    });

    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
      li.addClass('delete');
    }
  }

  $('#list').sortable();
}
