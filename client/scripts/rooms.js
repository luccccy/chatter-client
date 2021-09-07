var Rooms = {
  _data: new Set(),

  update: function() {
    console.log('room update', Rooms._data);
    RoomsView.render(Rooms._data);
  },

  add: function(room) {
    Rooms._data.add(room);
    //console.log(Rooms._data);
  }

};