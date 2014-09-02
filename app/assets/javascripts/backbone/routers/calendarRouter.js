App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'events/new': 'newEvent',
    'events/edit': 'editEvent'
  },

  initialize: function(){
    console.log('New Router created');
    App.eventCollection = new App.EventsCollection();
    console.log(userID);
    currentUser = new App.UserModel({id: userID});
    currentUser.fetch();
    console.log(currentUser);
    App.userView = new App.UserView({model: currentUser, collection: App.eventCollection});
    App.eventCollection.fetch({reset: true});
    App.formView = new App.EventsFormView({collection: App.eventCollection});
  },

  index: function(){
    console.log('fired index!');
  }
})
