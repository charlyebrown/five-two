App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'events/new': 'newEvent',
    'events/edit': 'editEvent'
  },

  initialize: function(){
    console.log('New Router created');
    App.eventCollection = new App.EventsCollection();
    App.userView = new App.UserView({collection: App.eventCollection});
  },

  index: function(){
    console.log('fired index!')
    var currentUser = new App.UserModel({id: App.Globals.userId});
    currentUser.fetch();
    console.log(currentUser);
  }
})
