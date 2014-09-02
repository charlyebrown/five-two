App.EventsCollection = Backbone.Collection.extend({
  model: App.EventModel,

  url: '/events',

  initialize: function(){
    console.log('Events Collection Created');
  }

})
