App.UserView = Backbone.View.extend({
  el: '#user-display',

  initialize: function(){
    console.log('User View Generated');
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    this.template = HandlebarsTemplates['users/user'];
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addAll: function(){
    this.collection.each(function(event){
      this.addOne(event);
    }, this)
  },

  addOne: function(event){
    var eventView = new App.EventView({model: event});
    eventView.$el.insertAfter(this.$('span.add'));
  },


  events: {
    'click span.add': 'showForm'
  },

  showForm: function(){
    console.log('trying to add new event')
    App.router.navigate('events/new')
    new App.EventsFormView();
    $('#event-form').fadeIn(500);
  }
});
