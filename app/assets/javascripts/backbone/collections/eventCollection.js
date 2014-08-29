App.EventsCollection = Backbone.Collection.extend({
  model: App.EventModel,

  url: '/users/:id/calendar',

  initialize: function(){
    console.log('Events Collection Created');
  }

})
