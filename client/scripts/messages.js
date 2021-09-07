var Messages = {
  _data: [],

  update: function(messageData) {
    for (const message of messageData) {
      Messages._data.push(message);
      Rooms._data.add(message.roomname);
    }
    Messages._data.sort((a, b) => parseInt(b.message_id) - parseInt(a.message_id));
    MessagesView.render(Messages._data);
  }


};