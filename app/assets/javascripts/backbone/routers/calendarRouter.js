App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'events/new': 'newEvent',
    'events/edit': 'editEvent'
  },

  initialize: function(){
    console.log('New Router created');
  },

  index: function(){
    console.log('fired index!')
    var currentUser = new App.UserModel({id: App.Globals.userId});
    currentUser.fetch();
  }
})
