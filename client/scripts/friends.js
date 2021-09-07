var Friends = {

  toggleStatus: function(friend) {
    var friendMessage = Messages._data.filter(message => message.username === friend);
    //console.log(friendMessage);
    $('#chats').html('');
    MessagesView.render(friendMessage);
  }

};