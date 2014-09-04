App.UserView = Backbone.View.extend({
  el: '#user-display',

  initialize: function(){
    console.log('User View Generated');
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.model, 'change', this.render)
    this.template = HandlebarsTemplates['users/user'];
    this.$('span.add_event').show();
    this.render();
  },

  render: function(){
    // this.$el.html(this.template(this.model.toJSON()));
    // this.addAll();
    this.template(this.model.toJSON());
    $('svg').remove();
    $('.head_row').hide();
    var models = this.collection.map(function(model) {
      return model.toJSON();
    });
    console.log('rendered models');
    drawBubbles(models);
  },

  // addAll: function(){
  //   this.collection.each(function(event){
  //     this.addOne(event);
  //   }, this)
  // },
  //
  // addOne: function(event){
  //   var eventView = new App.EventView({model: event});
  //   eventView.$el.insertAfter(this.$('span.add_event'));
  //   $('span.add_event').show();
  //   App.router.navigate('');
  // },

  events: {
    'click span#add_event': 'showForm',
    'click span#bubbles': 'showBubbles',
    'click span#bars': 'showBars',
  },

  showBubbles: function(){
    console.log('show me the bubbles')
    var models = this.collection.map(function(model) {
      return model.toJSON();
    });
    $('.svg_display').empty();
    drawBubbles(models);
  },

  showBars: function(){
    console.log('show me the bars')
    var models = this.collection.map(function(model) {
      return model.toJSON();
    });
    $('.svg_display').empty();
    drawBars(models);
  },


  showForm: function(){
    App.router.navigate('events/new')
    $('.event-form').show();
    App.formView.$el.insertAfter(this.$('span.user_info'))
    $('span.add_event').hide();
  }
});
