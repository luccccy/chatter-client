var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#addRoom').val() || $('#rooms select').find("option:selected").val()
    };
    Parse.create(message);
    //console.log('click!');
    //console.log($('#message').val());
    //console.log($('.roomname').val());
    //console.log(App.username);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};