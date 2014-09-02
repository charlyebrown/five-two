App.UserView = Backbone.View.extend({
  el: '#user-display',

  initialize: function(){
    console.log('User View Generated');
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.model, 'change', this.render)
    this.template = HandlebarsTemplates['users/user'];
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.addAll();
  },

  addAll: function(){
    this.collection.each(function(event){
      this.addOne(event);
    }, this)
  },

  addOne: function(event){
    var eventView = new App.EventView({model: event});
    eventView.$el.insertAfter(this.$('span.add_event'));
    $('span.add_event').show();
    App.router.navigate('');
  },

  events: {
    'click span.add_event': 'showForm'
  },

  showForm: function(){
    App.router.navigate('events/new')
    $('.event-form').show();
    App.formView.$el.insertAfter(this.$('span.user_info'))
    $('span.add_event').hide();
  }
});
