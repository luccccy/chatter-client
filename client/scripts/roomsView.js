var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddButton);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function(data) {
    for (const room of data) {
      if (room && room !== '') {
        RoomsView.renderRoom(room);
      }
    }
  },

  renderRoom: function(roomname) {
    $('#rooms select').append($('<option class="roomname"></option>').text(roomname));
  },

  handleAddButton: function() {
    console.log('*************');
    $('#addRoom').toggle();
    var newRoom = $('#addRoom').val();
    if (newRoom !== '') {
      Rooms.add(newRoom);
    }
    //console.log('add room', Rooms._data);
    //RoomsView.render(Rooms._data);
  },

  handleChange: function(e) {
    //console.log("change");
    //console.log(this.value);
    //console.log($('#rooms select').find("option:selected").val());
  }
};
