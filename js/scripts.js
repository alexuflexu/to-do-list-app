function newItem(){
    
  //Adding a new item to the list of items: 
  let li = $('<li></li>');
  let inputValue = $('#input').val(); 
  li.append(inputValue); 
  
  if ($('#input').val() === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
     list.append(li);
  } 
  
  //Crossing out an item from the list of items:
  li.on('dblclick', function (){
      li.toggleClass('strike');
  });
  
  //Adding the delete button "X": 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
    $(crossOutButton).append('X');
    li.append(crossOutButton);
  
  crossOutButton.on('click', function (){
      li.addClass('delete');
    });
  
  //Reordering the items: 
  $('#list').sortable();
  
  //Input text dissapear once 'Add' button clicked and item is added to the list of items:
  $('#input').val('');
  }