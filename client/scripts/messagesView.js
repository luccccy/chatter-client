var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleToggle);
  },

  render: function(data) {
    for (const message of data) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  },

  handleToggle: function(e) {
    var friend = $(e.target).text();
    Friends.toggleStatus(friend);
  }

};