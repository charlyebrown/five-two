App.UserModel = Backbone.Model.extend({
  urlRoot: '/events',
  initialize: function(){
    console.log('New Events Model Created');
  }
})
